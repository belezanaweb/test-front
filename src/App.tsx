import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <AppProvider>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
