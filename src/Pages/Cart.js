import React, { Component } from 'react';
import './Cart.css';
import '../Components/Button.css';
import ProductList from '../Components/ProductList'
import Checkout from './Layout/Checkout'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProductList } from '../Actions'

class Cart extends Component {
  state = {
    productList: []
  }

  componentDidMount() {
    const { updateProductList } = this.props;
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(response => response.json())
      .then(info => {
        this.setState({
          productList: info
        });
        updateProductList(info);
      }).catch(alert);

  }

  render() {
    const { productList } = this.state;

    return (
      <Checkout current="cart">
          <div className="cart-container">
            <ProductList products={productList === undefined ? [] : productList} />
            <Link to="payment" className="btn">Seguir para o pagamento</Link>
          </div>
      </Checkout>
    );
  }
}

const mapStateToProps = store => ({
  productList: store.cartState.productList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProductList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
