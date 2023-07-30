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
        background: "#06030E",
        primary: "#C1E3E0",
        secondary: "#869F9E",
        accent: "#46d4c6",

        // light theme
        // background: "#040307",
        // primary: "#7a6bc7",
        // secondary: "#1b1537",
        // accent: "#6a59c0",
        // text: "#ebe9f7",
      },
    },
  },
  plugins: [],
};
