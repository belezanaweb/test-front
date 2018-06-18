

import React, { Component } from 'react';
import Routes from './Routes';

import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

/** -----------------------------------------------
 * Main Class
 */
class App extends Component {


  render() {
    return (     

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>

    );
  }
}

export default App;
