/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/web-client/**/*.{ts,tsx,vue}"],
  theme: {
    // fontFamily: {
    //   sans: ["var(--font-family)", "sans-serif"],
    // },
    colors: {
      black: "#000",
      white: "#fff",
      neutral: "#e8e9e5",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
      },
    },
  },
};
