import { injectGlobal } from 'styled-components';

injectGlobal`

  :root {
    --color-orange-1: #FF7800;
    --color-orange-2: #ff6c00;
    --color-orange-3: #d45a00;

    --color-light-gray-1: #CCC;
    --color-dark-gray-2: #EEE;
    --color-dark-gray-3: #999;

    --border-box: 1px solid #ccc;

    --box-shadow-1: 0 1px 5px 0 rgba(0, 0, 30, .20);
    --box-shadow-bottom-1: 0 5px #ff6c00;
    --box-shadow-bottom-2: 0 4px #d45a00;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherid;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    font-weight: 400;
    line-height: 1.6;
  }

  body {
    background-color: var(--color-dark-gray-2);
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  }
`
