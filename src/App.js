import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
	<Provider store={store}>
		<Router>
			<Header />
			<Routes />
			<GlobalStyle />
		</Router>
	</Provider>
);

export default App;
