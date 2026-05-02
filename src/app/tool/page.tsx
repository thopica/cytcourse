import type { Metadata } from "next";
import ToolApp from "./ToolApp";

export const metadata: Metadata = {
  title: "Cyanotype Photo Converter",
  description:
    "Upload a photo and download a print-ready cyanotype negative in seconds. Runs in your browser—your image never leaves your device.",
};

export default function ToolPage() {
  return <ToolApp />;
}
