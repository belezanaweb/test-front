import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {RecoilRoot} from 'recoil';
import {useEffect} from 'react';

export function reportWebVitals(metric) {
	console.log(metric);
}
export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<RecoilRoot>
					<Component {...pageProps} />
			</RecoilRoot>
		</>
	)
}

const GlobalStyle = createGlobalStyle`
	html {
		margin: 0;
		scroll-behavior: smooth;
		display: block;
		background: #fff;
		font-family: 'Helvetica', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	}
	ul{
		list-style: none;
		padding:0;
		margin:0;
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
