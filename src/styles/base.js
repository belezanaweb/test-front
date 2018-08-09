import { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

injectGlobal`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
