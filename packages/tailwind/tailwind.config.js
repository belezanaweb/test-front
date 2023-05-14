const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/common-ui/**/*.{tsx,ts}', 'src/**/*.{tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#9222DC',
        200: '#560789'
      },
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#F5F5F5',
        200: '#CCCCCC',
        300: '#9B9B9B',
        400: '#878787',
        500: '#515151'
      }
    },
    fontFamily: {
      sans: ['Open Sans', ...fontFamily.sans]
    }
  },
  plugins: []
}
