/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "schwifty": ["Get Schwifty", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
