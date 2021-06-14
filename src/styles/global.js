import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyles = createGlobalStyle`
  ${theme}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    font-size: 62.5%;
    background: var(--colors-background);
    height:100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

export default GlobalStyles
