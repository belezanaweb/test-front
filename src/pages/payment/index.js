import React, { Component, Fragment } from 'react';

// import { Container } from './style';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Creators as ProductsActions} from '../../store/ducks/products'

import CreditCard from '../../components/credit-card';
import Header from '../../components/header';

class Payment extends Component {

  componentDidMount(){
    this.props.getProductsRequest();
  }
  render() {
    return (
      <Fragment>
        <Header activePage="payment" />
        <CreditCard shoppingCart={this.props.shoppingCart} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.products.shoppingCart
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
