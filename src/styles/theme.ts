export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.188rem'
  },
  font: {
    family:
      "'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '0.75rem',
      small: '0.813rem',
      regular: '1rem',
      xlarge: '1.25rem'
    }
  },
  colors: {
    primary: '#FF6C00',
    secondary: '#D45A00',
    white: '#FFFFFF',
    black: '#212121',
    purple: '#A43287',
    red: '#F30F30',
    lightGray: '#E7E7E7',
    mediumGray: '#CCC',
    darkGray: '#777',
    lightBlue: '#E0E7EE'
  },
  spacings: {
    regular: '0.813rem',
    large: '1.125rem'
  },
  layers: {
    base: 10
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
