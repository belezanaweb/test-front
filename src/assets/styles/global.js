import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
	* {
        box-sizing: border-box;
		border: none;
		margin: 0;
		padding: 0;
    }

	body {
		background-color: ${colors.body.background};
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		  sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 320px;
	}

	ul,
	ol {
	  list-style: none;
	}
  
	html,
	body {
		height: 100%;
	}	
`

export const Wrapper = styled.div`
  padding: 0 10px 0 9px;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`
