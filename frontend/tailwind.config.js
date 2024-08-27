/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mygreen: '#00df9a',
        myblue: '#17e8ff',
        myblack: '#000300',
        mygray: '#181C1F',
      },
    },
  },
  plugins: [],
}
