"use client";

import { useCallback, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGuidelines from "./components/PhotoGuidelines";
import UploadZone from "./components/UploadZone";
import QualityFeedback from "./components/QualityFeedback";
import ImagePreview from "./components/ImagePreview";
import ContrastSlider from "./components/ContrastSlider";
import DownloadButton from "./components/DownloadButton";
import PrintInstructions from "./components/PrintInstructions";
import ToolFaq from "./components/ToolFaq";
import {
  CONTRAST_DEFAULT,
  CONTRAST_MAX,
  CONTRAST_MIN,
  processFileToNegative,
  reprocessContrast,
} from "./lib/imageProcessor";
import { analyzePhotoQuality, type QualityResult } from "./lib/qualityAnalyzer";
import styles from "./tool.module.css";

export default function ToolApp() {
  const [contrast, setContrast] = useState(CONTRAST_DEFAULT);
  const [loading, setLoading] = useState(false);
  const [processError, setProcessError] = useState<string | null>(null);
  const [originalDataUrl, setOriginalDataUrl] = useState<string | null>(null);
  const [convertedDataUrl, setConvertedDataUrl] = useState<string | null>(null);
  const [pngBlob, setPngBlob] = useState<Blob | null>(null);
  const [originalFileName, setOriginalFileName] = useState<string | null>(null);
  const [originalAlt, setOriginalAlt] = useState("Uploaded photo preview");
  const [quality, setQuality] = useState<QualityResult | null>(null);

  const sourceRef = useRef<ImageData | null>(null);

  const applyContrast = useCallback(async (value: number, source: ImageData) => {
    const result = await reprocessContrast(source, value);
    setConvertedDataUrl(result.previewDataUrl);
    setPngBlob(result.pngBlob);
  }, []);

  const handleContrastChange = useCallback(
    async (value: number) => {
      setContrast(value);
      const src = sourceRef.current;
      if (!src) return;
      try {
        setProcessError(null);
        await applyContrast(value, src);
      } catch (e) {
        console.error(e);
        setProcessError("Could not update preview. Try again.");
      }
    },
    [applyContrast],
  );

  const handleFileResetContrast = useCallback(
    async (file: File) => {
      setProcessError(null);
      setLoading(true);
      setQuality(null);
      setOriginalDataUrl(null);
      setConvertedDataUrl(null);
      setPngBlob(null);
      sourceRef.current = null;

      try {
        const result = await processFileToNegative(file, CONTRAST_DEFAULT);
        sourceRef.current = result.imageDataForAnalysis;
        setContrast(CONTRAST_DEFAULT);
        setOriginalFileName(file.name);
        setOriginalAlt(`Original photo: ${file.name}`);
        setOriginalDataUrl(result.originalDataUrl);
        setConvertedDataUrl(result.processed.previewDataUrl);
        setPngBlob(result.processed.pngBlob);
        setQuality(analyzePhotoQuality(result.imageDataForAnalysis));
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Something went wrong processing your photo.";
        setProcessError(msg);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const onFile = useCallback(
    (file: File) => {
      void handleFileResetContrast(file);
    },
    [handleFileResetContrast],
  );

  const hasImage = Boolean(originalDataUrl && convertedDataUrl);

  return (
    <>
      <Header logoOnly />
      <main className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Cyanotype Photo Converter</h1>
            <p className={styles.subtitle}>
              Upload your photo and download a print-ready negative in about 30 seconds.
            </p>
          </header>

          <PhotoGuidelines />

          <section className={styles.toolSection} aria-labelledby="tool-heading">
            <h2 id="tool-heading" className={styles.visuallyHidden}>
              Converter
            </h2>
            <UploadZone onFile={onFile} loading={loading} disabled={false} />
            {processError ? (
              <p className={styles.error} role="alert">
                {processError}
              </p>
            ) : null}

            {hasImage ? (
              <>
                <QualityFeedback result={quality} />
                <ImagePreview
                  originalSrc={originalDataUrl}
                  convertedSrc={convertedDataUrl}
                  originalAlt={originalAlt}
                />
                <ContrastSlider
                  id="cyanotype-contrast"
                  min={CONTRAST_MIN}
                  max={CONTRAST_MAX}
                  value={contrast}
                  onChange={(v) => void handleContrastChange(v)}
                  disabled={loading}
                />
                <DownloadButton
                  blob={pngBlob}
                  originalFileName={originalFileName}
                  disabled={loading}
                />
                <PrintInstructions />
              </>
            ) : null}
          </section>

          <ToolFaq />
        </div>
      </main>
      <Footer />
    </>
  );
}
