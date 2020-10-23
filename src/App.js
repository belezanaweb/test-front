import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { store } from './store';
import history from './services/history';
import Routes from './routes';
import NavBar from './components/NavBar';

const App = () => (
  <Provider store={store}>
    <HashRouter history={history}>
      <NavBar />

      <div className="App">
          <Routes />

          <GlobalStyle />
      </div>
    </HashRouter>
  </Provider>
)
export default App
