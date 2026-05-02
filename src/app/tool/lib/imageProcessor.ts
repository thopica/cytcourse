/**
 * Client-side cyanotype negative pipeline (PRD order):
 * grayscale → contrast → invert → flip horizontal → PNG on white.
 */

export const CONTRAST_MIN = 0;
export const CONTRAST_MAX = 200;
export const CONTRAST_DEFAULT = 130;

export const MAX_LONG_EDGE = 3000;

export function clampContrast(value: number): number {
  return Math.min(CONTRAST_MAX, Math.max(CONTRAST_MIN, Math.round(value)));
}

function grayscaleLuma(r: number, g: number, b: number): number {
  return Math.round(0.299 * r + 0.587 * g + 0.114 * b);
}

function applyContrast(gray: number, factorPercent: number): number {
  const v = 128 + ((gray - 128) * factorPercent) / 100;
  return Math.max(0, Math.min(255, Math.round(v)));
}

export type ProcessResult = {
  /** Blob for download */
  pngBlob: Blob;
  /** Data URL for preview (optional smaller for perf — same as output dimensions) */
  previewDataUrl: string;
  width: number;
  height: number;
};

/**
 * Scale dimensions so longest edge <= maxEdge, preserving aspect ratio.
 */
export function fitWithinMaxEdge(
  width: number,
  height: number,
  maxEdge: number,
): { width: number; height: number } {
  const longest = Math.max(width, height);
  if (longest <= maxEdge) {
    return { width, height };
  }
  const scale = maxEdge / longest;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

/**
 * Draw image to canvas at target size, return ImageData (RGBA)
 */
function drawImageToImageData(
  source: CanvasImageSource,
  targetW: number,
  targetH: number,
): ImageData {
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas not supported");
  }
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, targetW, targetH);
  ctx.drawImage(source, 0, 0, targetW, targetH);
  return ctx.getImageData(0, 0, targetW, targetH);
}

/**
 * Full pipeline on ImageData copy; returns new ImageData (negative, flipped).
 */
export function processNegative(
  source: ImageData,
  contrastPercent: number,
): ImageData {
  const { width, height, data } = source;
  const contrast = clampContrast(contrastPercent);
  const out = new ImageData(width, height);

  // Pass 1: grayscale → contrast → invert → write to temp row-major gray buffer
  const grayBuf = new Uint8Array(width * height);
  let p = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = p * 4;
      const lum = grayscaleLuma(data[i], data[i + 1], data[i + 2]);
      const cont = applyContrast(lum, contrast);
      const inv = 255 - cont;
      grayBuf[p] = inv;
      p++;
    }
  }

  // Pass 2: flip horizontal, write RGBA opaque on white
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcX = width - 1 - x;
      const g = grayBuf[y * width + srcX];
      const o = (y * width + x) * 4;
      out.data[o] = g;
      out.data[o + 1] = g;
      out.data[o + 2] = g;
      out.data[o + 3] = 255;
    }
  }

  return out;
}

export async function loadImageFromFile(file: File): Promise<{
  bitmap: ImageBitmap;
  width: number;
  height: number;
}> {
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  const isHeic =
    type === "image/heic" ||
    type === "image/heif" ||
    name.endsWith(".heic") ||
    name.endsWith(".heif");

  try {
    const bitmap = await createImageBitmap(file);
    return { bitmap, width: bitmap.width, height: bitmap.height };
  } catch {
    if (isHeic) {
      throw new Error(
        "HEIC could not be opened in this browser. Export the photo as JPG or PNG from Photos, then try again.",
      );
    }
    throw new Error(
      "Could not read this image. Use JPG, PNG, or WEBP up to 20 MB.",
    );
  }
}

export function imageDataToPngBlob(imageData: ImageData): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(new Error("Canvas not supported"));
  }
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imageData, 0, 0);
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("PNG export failed"));
      },
      "image/png",
      1,
    );
  });
}

export function imageDataToDataUrl(imageData: ImageData): string {
  const canvas = document.createElement("canvas");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return "";
  }
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

/**
 * Process file → analysis-sized ImageData + full pipeline result for preview/download.
 * Uses same dimensions for analysis and processing (after max-edge scale).
 */
/**
 * Re-run pipeline from cached source pixels (e.g. contrast slider).
 */
export async function reprocessContrast(
  source: ImageData,
  contrastPercent: number,
): Promise<ProcessResult> {
  const negative = processNegative(source, contrastPercent);
  const pngBlob = await imageDataToPngBlob(negative);
  const previewDataUrl = imageDataToDataUrl(negative);
  return {
    pngBlob,
    previewDataUrl,
    width: source.width,
    height: source.height,
  };
}

export async function processFileToNegative(
  file: File,
  contrastPercent: number,
): Promise<{
  originalDataUrl: string;
  processed: ProcessResult;
  workingWidth: number;
  workingHeight: number;
  imageDataForAnalysis: ImageData;
}> {
  const { bitmap, width: natW, height: natH } = await loadImageFromFile(file);
  const { width: w, height: h } = fitWithinMaxEdge(natW, natH, MAX_LONG_EDGE);

  const sourceData = drawImageToImageData(bitmap, w, h);
  try {
    bitmap.close();
  } catch {
    /* ignore */
  }

  const negative = processNegative(sourceData, contrastPercent);

  const pngBlob = await imageDataToPngBlob(negative);
  const previewDataUrl = imageDataToDataUrl(negative);

  const origCanvas = document.createElement("canvas");
  origCanvas.width = w;
  origCanvas.height = h;
  const octx = origCanvas.getContext("2d");
  if (!octx) {
    throw new Error("Canvas not supported");
  }
  octx.fillStyle = "#ffffff";
  octx.fillRect(0, 0, w, h);
  octx.putImageData(sourceData, 0, 0);
  const originalDataUrl = origCanvas.toDataURL("image/jpeg", 0.92);

  return {
    originalDataUrl,
    processed: {
      pngBlob,
      previewDataUrl,
      width: w,
      height: h,
    },
    workingWidth: w,
    workingHeight: h,
    imageDataForAnalysis: sourceData,
  };
}
