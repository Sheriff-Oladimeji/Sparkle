/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark: "#1D1D1D",
        lightGray: "#B8B6B8",
      },
    },
  },
  plugins: [],
};