"use client";

import { useCallback, useId, useRef, useState } from "react";
import styles from "./UploadZone.module.css";

const MAX_BYTES = 20 * 1024 * 1024;
const ACCEPT = "image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif";

function validateFile(file: File): string | null {
  if (file.size > MAX_BYTES) {
    return "File is too large. Maximum size is 20 MB.";
  }
  const mime = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  const okMime =
    mime === "image/jpeg" ||
    mime === "image/png" ||
    mime === "image/webp" ||
    mime === "image/heic" ||
    mime === "image/heif" ||
    mime === "";
  const okExt =
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg") ||
    name.endsWith(".png") ||
    name.endsWith(".webp") ||
    name.endsWith(".heic") ||
    name.endsWith(".heif");
  if (!okMime && !okExt) {
    return "Please use JPG, PNG, WEBP, or HEIC.";
  }
  return null;
}

type Props = {
  onFile: (file: File) => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function UploadZone({ onFile, disabled, loading }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hintId = useId();

  const handleFile = useCallback(
    (file: File | undefined) => {
      setError(null);
      if (!file) return;
      const err = validateFile(file);
      if (err) {
        setError(err);
        return;
      }
      onFile(file);
    },
    [onFile],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
    e.target.value = "";
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (disabled || loading) return;
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled && !loading) setDragActive(true);
  };

  const onDragLeave = () => setDragActive(false);

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.zone} ${dragActive ? styles.zoneActive : ""} ${loading ? styles.zoneLoading : ""}`}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        role="region"
        aria-labelledby={hintId}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          className={styles.input}
          aria-label="Upload a photo"
          aria-describedby={hintId}
          disabled={disabled || loading}
          onChange={onInputChange}
        />
        <p id={hintId} className={styles.lead}>
          {loading ? "Processing your photo…" : "Drag and drop a photo here, or choose a file"}
        </p>
        <p className={styles.meta}>JPG, PNG, WEBP, or HEIC · max 20 MB</p>
        <button
          type="button"
          className={`btn btn--cta ${styles.button}`}
          disabled={disabled || loading}
          onClick={() => inputRef.current?.click()}
        >
          {loading ? "Please wait…" : "Choose photo"}
        </button>
      </div>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
