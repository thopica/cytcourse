"use client";

import styles from "./DownloadButton.module.css";

type Props = {
  blob: Blob | null;
  originalFileName: string | null;
  disabled?: boolean;
};

function baseFileName(name: string): string {
  const parts = name.split(".");
  if (parts.length > 1) parts.pop();
  return parts.join(".") || "photo";
}

export default function DownloadButton({
  blob,
  originalFileName,
  disabled,
}: Props) {
  const canDownload = Boolean(blob && originalFileName && !disabled);

  function handleClick() {
    if (!blob || !originalFileName) return;
    const base = baseFileName(originalFileName);
    const safe = base.replace(/[^\w\-]+/g, "-").replace(/^-+|-+$/g, "") || "photo";
    const filename = `cyanotype-negative-${safe}.png`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`btn btn--cta btn--full ${styles.btn}`}
        disabled={!canDownload}
        onClick={handleClick}
      >
        Download Negative
      </button>
    </div>
  );
}
