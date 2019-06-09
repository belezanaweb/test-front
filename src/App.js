import React, { Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import Routes from './routes'
import GlobalStyle from './styles/global';

import store from './store'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Routes />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
