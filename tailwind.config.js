/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          50: "rgb(215, 215, 235)",
          100: "rgb(180, 180, 220)",
          200: "rgb(160, 160, 200)",
          300: "rgb(130, 130, 185)",
        },
        dark: {
          50: "rgb(65, 65, 65)",
          100: "rgb(45, 45, 45)",
          200: "rgb(25, 25, 25)",
          300: "rgb(5, 5, 5)",
        },
      },
    },
  },
  plugins: [],
};
