// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6EE7B7",
        "accent-dim": "#059669",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        border: "#222222",
        muted: "#888888",
        subtle: "#444444",
      },
      fontFamily: {
        display: ["DM Serif Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;