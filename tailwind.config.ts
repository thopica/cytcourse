import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/(portal)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/portal/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
      },
      colors: {
        member: {
          primary: "#6B3FA0",
          primaryLight: "#F3EEF8",
          cta: "#34C759",
          ctaHover: "#2DB84E",
          text: "#1A1A1A",
          textMuted: "#555555",
          page: "#FCFCFA",
          border: "#E5E5E5",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
