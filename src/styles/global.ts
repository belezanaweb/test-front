import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
      /* poppins-300 - latin */
    @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Helvetica Neue Light'), local('Helvetica Neue Light'),
        url('/fonts/HelveticaNeueCyr-Light.woff2') format('woff2'), /* Super Modern Browsers */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Helvetica Neue Roman'), local('Helvetica Neue Roman'),
        url('/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'), /* Super Modern Browsers */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Helvetica Neue Bold'), local('Helvetica Neue Bold'),
        url('/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'), /* Super Modern Browsers */
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    sans-serif;
  }
  code {
  font-family: source-code-pro, Helvetica Neue, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`
