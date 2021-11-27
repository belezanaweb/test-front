/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import theme from '../src/global/theme'
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
