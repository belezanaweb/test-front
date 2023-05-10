import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string
      size: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }

    colors: {
      bgBody: string
      purple: string
      white: string
      black: string
      gray: string
      gray01: string
      gray02: string
      red: string
    }
  }
}
