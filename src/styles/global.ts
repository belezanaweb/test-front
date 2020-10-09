import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: #EEE no-repeat;
    color: #212122;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
