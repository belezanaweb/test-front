import { createGlobalStyle } from 'styled-components'

import * as T from './typography'
import * as C from './colors'

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
		border: none;
		margin: 0;

		padding: 0;
  }

  ul,
  ol {
    list-style: none;
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
    font-size: 62.5%
  }

	html,
  body {
		height: 100%;
  }

	body {
		font-family: ${T.PRIMARY_FONT};
    color: ${C.TEXT_PRIMARY_COLOR};
    background-color: ${C.SECONDARY_COLOR};
  }

	a {
		text-decoration: none;
  }

	img {
		max-width: 100%;
	}
`
