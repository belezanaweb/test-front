import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    overflow-x: hidden;
  }
  
  body {
    background-color: #EEE;
  }
`

export default GlobalStyle
