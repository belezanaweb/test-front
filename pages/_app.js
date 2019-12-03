import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import { Provider } from 'react-redux';
import '../style/global.scss';

import Header from '../components/header';

class CoreApp extends App {
	render() {
		const { Component, store, pageProps, router } = this.props;
		return (
			<>
				<Provider store={store}>
					<Header router={router} />
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}

export default withRedux(initStore)(CoreApp);
