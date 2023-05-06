// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      neutral: {
        700: '#515151',
        600: '#878787',
        500: '#CCCCCC'
      },
      purple: {
        500: '#9222DC'
      },
      red: {
        500: '#DE1616'
      }
    },
    fontFamily: {
      sans: ['Arial', ...fontFamily.sans]
    }
  },
  plugins: []
}
