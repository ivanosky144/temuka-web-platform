/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#33CAFF',
        midcyan: '#67D8FF',
        darkcyan: '#0D7FA7',
        greencyan: '#21FBAF',
        lightcyan: '#AEF6F7'
      }
    },
  },
  plugins: [],
}