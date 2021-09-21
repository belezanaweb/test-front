import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * { box-sizing: border-box }
  body {
    color: #777;
    background: #EEE;
    font-size: 13px;
    line-height: 1.23rem;
    letter-spacing: 0.0715em;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    transition: color .25s linear, background .3s ease-in-out;
    padding-bottom: 0.5rem;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`

export default GlobalStyle
