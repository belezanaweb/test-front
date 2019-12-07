import React, { Component } from 'react';
import './Cart.css';
import '../Components/Button.css';
import ProductList from '../Components/ProductList'
import Master from './Layout/Master'

class Cart extends Component {
  state = {
    apiResult: []
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(response => response.json())
      .then(info => {
        this.setState({
          apiResult: info
        })
      }).catch(alert);
  }

  render() {
    return (
      <Master current="cart">
          <div className="cart-container">
            <ProductList products={this.state.apiResult === undefined ? [] : this.state.apiResult} />
            <button className="btn">Seguir para o pagamento</button>
          </div>
      </Master>
    );
  }
}

export default Cart;
