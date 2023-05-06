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
        800: '#515151',
        700: '#878787',
        600: '#9B9B9B',
        500: '#CCCCCC',
        400: '#F5F5F5'
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
