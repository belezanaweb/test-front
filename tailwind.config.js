/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#9222DC',
        'gray-dark': '#515151',
        gray: '#878787',
        'gray-light': '#CCCCCC',
        error: '#DE1616'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
