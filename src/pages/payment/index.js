import React, { Component, Fragment } from 'react';

// import { Container } from './style';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../../components/header'
import Products from '../../components/products';
import ValueDescription from '../../components/value-description'
import Button from '../../components/button/';

import {Creators as ProductsActions} from '../../store/ducks/products'

class Payment extends Component {

  componentDidMount(){
    this.props.getProductsRequest();
  }
  render() {
    return (
      <Fragment>
        <Header activePage="payment" />
        {/* <Products /> */}
        <ValueDescription
          subTotal={this.props.shoppingCart.subTotal}
          shippingTotal={this.props.shoppingCart.shippingTotal}
          discount={this.props.shoppingCart.discount}
          total={this.props.shoppingCart.total}
        />
        <Button content={"Finalizar o Pedido"} routeTo={"success"}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.products.shoppingCart
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
