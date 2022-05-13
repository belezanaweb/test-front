import theme from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xxsmall: string
        xsmall: string
        small: string
        regular: string
        xlarge: string
      }
    }
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
      purple: string
      red: string
      orange: string
      lighterGray: string
      lightGray: string
      mediumGray: string
      gray: string
      darkGray: string
      lightBlue: string
    }
    spacings: {
      xsmall: string
      small: string
      regular: string
      large: string
      xlarge: string
    }
    layers: {
      base: number
      overlay: number
      alwaysOnTop: number
    }
    transition: {
      default: string
      fast: string
    }
  }
}
