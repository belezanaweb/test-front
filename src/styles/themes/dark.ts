export default {
  title: 'dark',
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
      xxsmall: '0.75rem',
      xsmall: '0.813rem',
      small: '0.875rem',
      regular: '1rem',
      xlarge: '1.25rem'
    }
  },
  colors: {
    primary: '#FF6C00',
    secondary: '#D45A00',
    white: '#142035',
    black: '#FFFFFF',
    purple: '#A43287',
    red: '#ED4956',
    orange: '#FF7800',
    lighterGray: '#0e1725',
    lightGray: '#263c60',
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
