/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        mygreen: '#ff66c2',
        myblue: '#5cc6ff',
        mywhite: '#f7f7f7',
        myblack: '#0e1111',
        mygray: '#181C1F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
