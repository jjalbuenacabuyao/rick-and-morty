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
      },
      margin: {
        "36-140": "clamp(2.25rem, -0.039rem + 9.77vw, 8.75rem)"
      },
      padding: {
        "36-140": "clamp(2.25rem, -0.039rem + 9.77vw, 8.75rem)"
      }
    },
  },
  plugins: [],
}
