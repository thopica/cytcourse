/**
 * Client-side photo quality signals for cyanotype prep (PRD).
 * Uses grayscale histogram: mean brightness, contrast (darkest vs brightest 10%),
 * and dimensions.
 */

export type QualityStatus =
  | "great"
  | "couldBeBetter"
  | "tooDark"
  | "tooBright"
  | "lowRes";

export const LOW_RES_MAX_EDGE = 1000;

/** Mean brightness below this => too dark */
export const BRIGHTNESS_TOO_DARK = 75;

/** Mean brightness above this => too bright / washed out */
export const BRIGHTNESS_TOO_BRIGHT = 210;

/**
 * Contrast ratio: mean(brightest 10%) / mean(darkest 10%), floored to avoid div0.
 * Below this (and not already dark/bright) => "could be better"
 */
export const CONTRAST_RATIO_MIN = 1.35;

export type QualityResult = {
  status: QualityStatus;
  message: string;
  meanBrightness: number;
  contrastRatio: number;
  maxEdge: number;
};

const MESSAGES: Record<QualityStatus, string> = {
  great: "Your photo looks great. Ready to download.",
  couldBeBetter: "Try increasing contrast for a more dramatic print.",
  tooDark: "Your photo looks dark. Choose a brighter photo for the best result.",
  tooBright:
    "Your photo looks washed out. Choose a photo with stronger shadows.",
  lowRes: "This photo is small. Larger photos produce sharper prints.",
};

function sampleDeciles(gray: Uint8ClampedArray, width: number, height: number) {
  const total = width * height;
  const values: number[] = new Array(total);
  let i = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = gray[idx];
      const g = gray[idx + 1];
      const b = gray[idx + 2];
      values[i++] = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    }
  }
  values.sort((a, b) => a - b);
  const bottomStart = Math.floor(total * 0.1);
  const topStart = Math.floor(total * 0.9);
  let sumLow = 0;
  let sumHigh = 0;
  let countLow = 0;
  let countHigh = 0;
  for (let k = 0; k < bottomStart; k++) {
    sumLow += values[k];
    countLow++;
  }
  for (let k = topStart; k < total; k++) {
    sumHigh += values[k];
    countHigh++;
  }
  const meanDark = countLow ? sumLow / countLow : 0;
  const meanBright = countHigh ? sumHigh / countHigh : 255;
  const contrastRatio =
    meanDark >= meanBright ? 1 : meanBright / Math.max(meanDark, 1);
  let sumAll = 0;
  for (let k = 0; k < total; k++) sumAll += values[k];
  const meanBrightness = total ? sumAll / total : 128;
  return { meanBrightness, contrastRatio };
}

export function analyzePhotoQuality(
  imageData: ImageData,
): QualityResult {
  const { width, height, data } = imageData;
  const maxEdge = Math.max(width, height);
  const { meanBrightness, contrastRatio } = sampleDeciles(data, width, height);

  let status: QualityStatus;

  if (maxEdge < LOW_RES_MAX_EDGE) {
    status = "lowRes";
  } else if (meanBrightness < BRIGHTNESS_TOO_DARK) {
    status = "tooDark";
  } else if (meanBrightness > BRIGHTNESS_TOO_BRIGHT) {
    status = "tooBright";
  } else if (contrastRatio < CONTRAST_RATIO_MIN) {
    status = "couldBeBetter";
  } else {
    status = "great";
  }

  return {
    status,
    message: MESSAGES[status],
    meanBrightness,
    contrastRatio,
    maxEdge,
  };
}
