import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <Router>
      <NavBar />
      <Routes />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
