import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root { height: 100% }
  body {
    background: #EEE;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  }
`
