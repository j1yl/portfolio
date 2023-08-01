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
        // OG THEME
        // background: "#06030E",
        // primary: "#C1E3E0",
        // secondary: "#869F9E",
        // accent: "#46d4c6",

        // NEW GREEN
        background: "hsl(189, 65%, 3%)",
        primary: "hsl(108, 38%, 82%)",
        secondary: "hsl(111, 12%, 57%)",
        accent: "hsl(107, 62%, 55%)",
      },
    },
  },
  plugins: [],
};
