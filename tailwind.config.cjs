/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "cursive"],
        roboto_mono: ["Roboto Mono", "monospace"],
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary_red: "#FF5353",
        primary_purple: "#7635FF",
        primary_blue: "#70CBFF",
        primary_white: "#D1D1D1",
        secondary_white: "#C8C8C8",
        third_white: "#9E9E9E",
        primary_dark: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
