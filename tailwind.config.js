/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: "#000000",
        paper: "#f5f4f0",
        accent: "#c8f135",
        muted: "#000000",
        border: "#000000",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

