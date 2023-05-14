const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/common-ui/**/*.{tsx,ts}', 'src/**/*.{tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#9222DC',
      black: '#000000',
      surface: '#FFFFFF',
      background: '#F5F5F5',
      gray: {
        100: '#CCCCCC',
        200: '#515151',
        300: '#878787'
      }
    },
    fontFamily: {
      sans: ['Open Sans', ...fontFamily.sans]
    }
  },
  plugins: []
}
