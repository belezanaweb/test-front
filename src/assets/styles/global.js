import { createGlobalStyle } from 'styled-components'

/* estilo global */
export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
		border: none;
		margin: 0;
		padding: 0;
  }

  select,
  input,
  button {
    background: inherit;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  html {
    font-size: 13px;
  }

  ul,
  ol {
    list-style: none;
  }


  @media(min-width: 600px) {
    html {
      font-size: 13px;
    }
  }

	html,
  body {
		height: 100%;
  }

	body {
		font-family: "Helvetica Neue", Arimo, Helvetica, Arial, sans-serif;
    color: #212122;
    background-color: #EEE;
  }

  
	img {
    max-width: 100%;
	}
  
  a {
    text-decoration: none;
  }
  `
