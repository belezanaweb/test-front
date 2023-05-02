/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fuschia: '#9222DC',
        red: {
          ...colors.red,
          500: '#DE1616'
        }
      },

      fontSize: {
        '2xl': '1.375rem'
      }
    }
  },
  plugins: []
}
