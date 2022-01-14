const fontFamily = {
  primary: '"Helvetica Neue", sans-serif'
}

const fontSize = {
  paragraph: '0.8125rem'
}

const color = {
  text: {
    primary: '#777777'
  },
  background: {
    primary: '#eeeeee'
  }
}

export type FontFamily = typeof fontFamily
export type FontSize = typeof fontSize
export type Color = typeof color

export default {
  fontFamily,
  fontSize,
  color
}
