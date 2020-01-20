import { createGlobalStyle } from 'styled-components'
const colors = {
  primary: '#ff6c00',
  grey: '#ccc',
  greyDark: '#949494',
  black: '#222'
}

const GlobalStyle = createGlobalStyle`
.container {
  width: 100%;
  max-width: 1043px;
  margin: 0 auto;
}

body {
  width: 100%;
  background-color: #ededed;
  font-family: "Gothic A1", sans-serif;
  max-width: 100%;
  overflow-x: hidden;
  color: #020202;
  display: block;
  position: relative;
	*{
		box-sizing: border-box;
		max-width: 100%;
	}
}
img {
  max-width: 100%;
  height: auto;
}
.page-title{
  color: ${colors.greyDark};
  font-size: .85rem;
  text-transform: uppercase;
  margin-left: 10px;
  margin-bottom: 3px;
}
.app-main{
  padding: 10px;
}
.u-normalizeUl{
  padding: 5px;
  margin: 0;
  list-style: none;
}
.row {
    margin: 0;
}
`

export { GlobalStyle, colors }
