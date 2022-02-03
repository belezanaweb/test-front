import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
        box-sizing: border-box;
		border: none;
		margin: 0;
		padding: 0;
    }

	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		  sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	  }
`
