/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: { 700: "#1b2a4a", 800: "#111d36", 900: "#0b1426", 950: "#070d1a" },
        brand: { 50: "#ecfbfd", 100: "#d0f4f9", 400: "#2ec4de", 500: "#0ea5c6", 600: "#0b8aa8", 700: "#0e6f87" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};