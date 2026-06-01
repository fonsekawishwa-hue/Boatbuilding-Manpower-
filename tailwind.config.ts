import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        harbor: {
          navy: "#0F2A3D",
          blue: "#176B87",
          teal: "#1B998B",
          amber: "#F59E0B",
          green: "#16A34A",
          red: "#DC2626",
          bg: "#F8FAFC",
          border: "#E2E8F0",
          slate: "#334155",
          muted: "#64748B"
        }
      },
      boxShadow: {
        soft: "0 14px 35px rgba(15, 42, 61, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
