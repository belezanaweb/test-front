import {  ThemeProvider } from 'styled-components';
import {RecoilRoot} from 'recoil';
import theme from '../theme';

export function reportWebVitals(metric) {
	console.log(metric);
}
export default function App({ Component, pageProps }) {
	return (
		<>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</RecoilRoot>
		</>
	)
}

