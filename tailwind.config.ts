import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2A5E42",
          "green-light": "#4A7A60",
          mint: "#C9E9EB",
          mustard: "#F1C180",
          pink: "#F9A2A2",
          cream: "#F8F4EE",
          "cream-dark": "#E8E2D4",
          gray: "#424241",
          "gray-light": "#9B9B9A",
          black: "#171717",
        },
      },
      fontFamily: {
        title: ["Paperlogy", "Pretendard", "system-ui", "sans-serif"],
        body: ["Wanted Sans", "Pretendard", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pop": "pop 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { transform: "scale(0.95)" },
          "60%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
