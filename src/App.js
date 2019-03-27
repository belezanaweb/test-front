import './assets/reset.css';
import React, { PureComponent } from 'react';
import { Provider } from "react-redux";
import configureStore from "../src/redux/configureStore";
import Routes from './routes/';

class App extends PureComponent {
  render() {

    const store = configureStore();

    return (


      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>



    );
  }
}

export default App;
