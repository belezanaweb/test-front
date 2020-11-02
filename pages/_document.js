import Document, { Html, Main,Head, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
			const sheet = new ServerStyleSheet()
			const originalRenderPage = ctx.renderPage
		  try {
		  ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
        })

        const initialProps = await Document.getInitialProps(ctx)
        return {
        ...initialProps,
        styles: (
          <>
          {initialProps.styles}
          {sheet.getStyleElement()}
          </>
        ),
        }
			}
			finally {
        sheet.seal()
			}
	}

	render() {

		return (
			<Html lang="pt-br">
				<Head>
					<meta name="theme-color" content="#fff"  key="theme-color"/>
					<link rel="icon" href="/favicon.ico" type="image/x-icon" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"  rel="stylesheet"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
