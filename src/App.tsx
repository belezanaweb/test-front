import * as React from 'react';
import { Provider } from 'exredux';
import { modelStore } from './service/modelStore';
import { HashRouter } from 'react-router-dom';
import { Header } from './containers/Header';
import { Routes } from './Routes';
import RouterHandler from './containers/RouterHandler';
import { Content } from './components/Content';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider modelStore={modelStore}>
          <Header />
          <Content>
            <Routes />
          </Content>
          <RouterHandler />
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
