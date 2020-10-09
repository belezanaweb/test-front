import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './routes';

const App = () => (
  <Router>
    <NavBar />
    <Routes />
  </Router>
);

export default App;
