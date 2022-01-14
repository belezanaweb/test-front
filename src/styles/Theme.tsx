const fontFamily = {
  primary: '"Helvetica Neue", sans-serif'
}

const fontSize = {
  paragraph: '0.8125rem',
  button: '1.25rem'
}

const color = {
  text: {
    primary: '#777777',
    button: {
      primary: '#FFFFFF'
    }
  },
  background: {
    primary: '#EEEEEE',
    button: {
      primary: '#FF6C00',
      primaryHovered: '#D45A00'
    }
  }
}

const borderRadius = {
  default: '0.1875rem'
}

export type FontFamily = typeof fontFamily
export type FontSize = typeof fontSize
export type Color = typeof color
export type BorderRadius = typeof borderRadius

export default {
  fontFamily,
  fontSize,
  color,
  borderRadius
}
