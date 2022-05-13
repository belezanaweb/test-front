export default {
  title: 'big',
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
      xxsmall: '1rem',
      xsmall: '1.063rem',
      small: '1.025rem',
      regular: '1.25rem',
      xlarge: '1.5rem'
    }
  },
  colors: {
    primary: '#FF6C00',
    secondary: '#D45A00',
    white: '#FFFFFF',
    black: '#212121',
    purple: '#A43287',
    red: '#F30F30',
    orange: '#FF7800',
    lighterGray: '#EEEEEE',
    lightGray: '#E7E7E7',
    mediumGray: '#CCCCCC',
    gray: '#999999',
    darkGray: '#777777',
    lightBlue: '#E0E7EE'
  },
  spacings: {
    xsmall: '0.5rem',
    small: '0.625rem',
    regular: '0.813rem',
    large: '1.125rem',
    xlarge: '1.25rem'
  },
  layers: {
    base: 10,
    overlay: 30,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
