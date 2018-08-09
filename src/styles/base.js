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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: #212122;

    background-color: #eee;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
