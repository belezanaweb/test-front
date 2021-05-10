import { createGlobalStyle } from 'styled-components'
import colors from './utils/colors'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica Neue;
    margin: 0;
    background-color: ${colors.backgroud};
  }
`
