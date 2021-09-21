import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * { box-sizing: border-box }
  body {
    color: #777;
    background: #EEE;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.0715em;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    transition: color .25s linear, background .3s ease-in-out;
    padding: 50px 10px 10px;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`

export default GlobalStyle
