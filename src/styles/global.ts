import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #EEEEEE;
    color: #212122;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Helvetica Neue', serif;
    font-size: 13px;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
`;