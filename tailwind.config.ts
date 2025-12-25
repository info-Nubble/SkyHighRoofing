import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0b2239",
        ocean: "#0e7490",
        teal: "#14b8a6",
        seafoam: "#99f6e4",
        sand: "#f4e6cf",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,34,57,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.35", transform: "translateX(-20%)" },
          "50%": { opacity: "0.6", transform: "translateX(20%)" },
        },
      },
      animation: {
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
