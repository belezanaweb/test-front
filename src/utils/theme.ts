import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  font: {
    family: 'Arial, sans-serif',
    size: {
      xsmall: '0.75rem', // 12px (12/16)
      small: '0.875rem', // 14px
      medium: '1rem', // 16px
      large: '1.125rem', // 18px
      xlarge: '1.25rem', // 20px
      xxlarge: '1.375rem' // 22px
    }
  },
  colors: {
    bgBody: '#F5F5F5',
    purple: '#9222DC',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#878787',
    gray01: '#CCCCCC',
    gray02: '#515151',
    red: '#DE1616'
  }
}
