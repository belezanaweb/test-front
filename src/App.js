import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import store from './store';

import { Content } from './styles';
import { theme } from './theme';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Content>
            <Routes />
          </Content>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
