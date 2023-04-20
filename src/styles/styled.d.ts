import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      mobile: number
      tablet: number
    }
    color: {
      primary: string
      white: string
      black: string
      grey: string
      'grey-default': string
      'grey-weak': string
      'grey-strong': string
      danger: string
    }
    border: {
      radius: {
        small: string
        large: string
      }
      width: {
        thin: string
        thick: string
      }
      style: {
        solid: string
      }
    }
    margin: {
      m0: string
      m1: string
      m2: string
      m3: string
      m4: string
      m5: string
      m6: string
      m7: string
      m8: string
      m9: string
      m10: string
    }
    padding: {
      p0: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
      p6: string
      p7: string
      p8: string
      p9: string
      p10: string
    }
    font: {
      spacing: {
        small: string
      }
      height: {
        small: string
        medium: string
      }
      size: {
        small: string
        medium: string
        large: string
        xlarge: string
        huge: string
        giant: string
      }
      weight: {
        regular: number
        medium: number
        bold: number
      }
    }
  }
}
