import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20201E",
        paper: "#F7F6F2",
        canvas: "#F0F2EB",
        muted: "#686762",
        accent: "#3F6B57",
        line: "#E1E5DE",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
