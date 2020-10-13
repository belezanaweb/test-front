import React from 'react'
import './App.css'
import Routes from './Routes'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;

