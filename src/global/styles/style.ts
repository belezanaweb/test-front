import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #eee;
  }

  * {
    font-family: Helvetica-Neue, HelveticaNeue, Helvetica, Arial, 'Lucida Grande', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export default GlobalStyle
