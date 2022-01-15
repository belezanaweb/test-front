const fontFamily = {
  primary: '"Helvetica Neue", sans-serif'
}

const fontSize = {
  paragraph: '0.8125rem',
  button: '1.25rem',
  input: '1rem',
  label: '0.75rem',
  errorText: '0.75rem'
}

const color = {
  text: {
    primary: '#777777',
    error: '#F30F30',
    button: {
      primary: '#FFFFFF'
    },
    input: {
      primary: '#212121',
      placeholder: '#E0E7EE'
    },
    label: {
      primary: '#CCCCCC'
    }
  },
  background: {
    primary: '#EEEEEE',
    button: {
      primary: '#FF6C00',
      primaryHovered: '#D45A00'
    },
    input: {
      primary: '#FFFFFF'
    }
  },
  border: {
    input: {
      primary: '#E7E7E7',
      focus: '#A43287',
      error: '#F30f30'
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
