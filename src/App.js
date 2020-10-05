import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
       <Header />
        <Routes />
        <GlobalStyle />
    </BrowserRouter>
  </Provider>
)

export default App
