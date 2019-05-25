import React, { Component } from 'react';
import classes from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className={classes.MainContainer}>
          <Switch>
            <Route path="/" exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
