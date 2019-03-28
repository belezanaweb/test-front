import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { Store } from './store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF6C00',
      light: '#D45A00',
      dark: '#FF7800'
      //contrastText: ''
    },
    secondary: {
      main: '#FFF'
      //light: '',
      //dark: '',
      //contrastText: ''
    },
    error: {
      main: '#ff4400'
      //light: '',
      //dark: '',
      //contrastText: ''
    }
  },

  typography: {
    useNextVariants: true,
    fontFamily: ['"Helvetica Neue"'].join(',')
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#ff4400'
      }
    }
  }
})

console.log('theme', theme)

ReactDOM.render(
  <Provider store={Store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
