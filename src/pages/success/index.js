import React, { Component, Fragment } from 'react';

// import { Container } from './style';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../../components/header'
import Products from '../../components/products';
import Payment from '../../components/payment';
import ValueDescription from '../../components/value-description';

import {Creators as ProductsActions} from '../../store/ducks/products'

class Success extends Component {

  componentDidMount(){
    this.props.getProductsRequest();
  }

  render() {
    return (
      <Fragment>
        <Header activePage="success" />
        <Payment />
        <Products />
        <ValueDescription
          subTotal={this.props.shoppingCart.subTotal}
          shippingTotal={this.props.shoppingCart.shippingTotal}
          discount={this.props.shoppingCart.discount}
          total={this.props.shoppingCart.total}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.products.shoppingCart
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Success)
