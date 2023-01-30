/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "schwifty": ["Get Schwifty", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-black": "#242424",
      }
    },
  },
  plugins: [],
}
