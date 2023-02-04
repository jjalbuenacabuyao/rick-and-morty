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
      fontSize: {
        "16-18": "clamp(1rem, 0.96rem + 0.18vw, 1.125rem)",
        "36-72": "clamp(2.25rem, 1.66rem + 2.966vw, 4.5rem)"
      },
      colors: {
        "custom-black": "#242424",
      },
      margin: {
        "36-140": "clamp(2.25rem, -0.039rem + 9.77vw, 8.75rem)"
      },
      padding: {
        "36-140": "clamp(2.25rem, -0.039rem + 9.77vw, 8.75rem)"
      },
      gap : {
        "16-24": "clamp(1rem, 0.87rem + 0.66vw, 1.5rem)"
      }
    },
  },
  plugins: [],
}
