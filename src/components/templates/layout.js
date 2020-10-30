
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const Layout = ({children}) => {
	return (
		<>
			<GlobalStyle />
			<Main>
				{children}
			</Main>
		</>

	)
}
export default Layout


const GlobalStyle = createGlobalStyle`
	html {
		margin: 0;
		scroll-behavior: smooth;
		height:100%;

		display: block;
		background: #fff;
		font-family: ${({ theme }) => theme.fontFamily};
	}
	ul{
		list-style: none;
		padding:0;
		margin:0;
		font-family: ${({ theme }) => theme.fontFamily};
		box-sizing:border-box;
	}
	body {
		margin: 0;
		text-rendering: optimizelegibility;
		font-feature-settings: "kern";
		font-kerning: normal;
		-webkit-font-smoothing: antialiased;
		background:#eee;
		height: 100%;

		button,
		input {
			font-family: 'Helvetica', sans-serif;
		}
	}
`

const Main = styled.main`
	display:flex;
	flex-flow:row wrap;
	box-sizing:border-box;
	height:100%;
`
