import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      teste
    </ThemeProvider>
  );
}

export default App;

