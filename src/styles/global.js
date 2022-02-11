import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  h1,
  input,
  button,
  fieldset {
    border: none;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  // base styles
  body {
    font-family: sans-serif;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #EEE;
    height: 100vh;
  }


  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58.59375%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 54.6875%;
    }
  }
`;
