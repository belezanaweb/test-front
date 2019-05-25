import React, { Component } from 'react';
import classes from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Containers/Cart/Cart';
import Header from './Components/Header/Header';
import { initCart } from './Store/Actions/CartAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { API } from './Constants';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    axios.get(API)
    .then(res => {
      const {shippingTotal, discount, subTotal, total, items} = res.data;
      this.props.initCart({shippingTotal, discount, subTotal, total, items})
    })
    .catch(error => console.error('Error into to reach the API:', error))
  }

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

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  initCart: (cart) => dispatch(initCart(cart))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
