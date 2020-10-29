
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
		display: block;
		background: #fff;
		font-family: ${({ theme }) => theme.fontFamily};
	}
	ul{
		list-style: none;
		padding:0;
		margin:0;
		font-family: ${({ theme }) => theme.fontFamily};

	}
	body {
		margin: 0;
		text-rendering: optimizelegibility;
		font-feature-settings: "kern";
		font-kerning: normal;
		-webkit-font-smoothing: antialiased;
		button,
		input {
			font-family: 'Helvetica', sans-serif;
		}
	}
`

const Main = styled.main`
	background:#eee;
	display:flex;
	flex-flow:row wrap;
	box-sizing:border-box;
	min-height:100vh;
`
