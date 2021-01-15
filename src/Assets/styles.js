import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #EEE;
    margin: 0px;
		overflow-y: scroll;
    padding: 0px;
  }

  body, input, button {
    font-family: 'Helvetica Neue';
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
