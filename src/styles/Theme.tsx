const fontFamily = {
  primary: '"Helvetica Neue", sans-serif'
}

const fontSize = {
  paragraph: '0.8125rem',
  button: '1.25rem',
  input: '1rem',
  label: '0.75rem',
  errorText: '0.75rem',
  pageTitle: '0.875rem'
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
    },
    header: {
      primary: '#CCCCCC',
      active: '#FF7800'
    },
    pageTitle: {
      primary: '#999999'
    },
    productInfo: {
      primary: '#212121'
    },
    purchaseSummary: {
      primary: '#212122',
      highlight: '#FF7800'
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
    },
    header: {
      primary: '#FFFFFF'
    },
    card: {
      primary: '#FFFFFF'
    }
  },
  border: {
    input: {
      primary: '#E7E7E7',
      focus: '#A43287',
      error: '#F30f30'
    },
    productInfo: {
      primary: '#EEEEEE'
    },
    purchaseSummary: {
      primary: '#CCCCCC'
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
