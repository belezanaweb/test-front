import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import Main from './components/Main'
import Router from './router'
import { GlobalStyle } from './style/base'


const store = configureStore()

const App = () => (
  <div>
    <GlobalStyle />
    <Provider store={store}>
      <Main>
        <Router />
      </Main>
    </Provider>
  </div>
)

export default App
