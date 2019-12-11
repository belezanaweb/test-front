import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index.js';
import ProductList from '../components/ProdutctList';
import Header from '../components/Header';
import Button from '../components/Button';
import FinalizeAccount from '../components/FinalizeAccount';

class Cart extends Component {

  render() {
    return (
      <div>
        <Header />
        <ProductList
          items={this.props.items}
        />
        <FinalizeAccount
          subTotal={this.props.subTotal}
          shippingTotal={this.props.shippingTotal}
          discount={this.props.discount}
          total={this.props.total}
        />
        <Button label='SEGUIR PARA O PAGAMENTO' handleClick='payment' />
      </div>
    );
  }

  componentDidMount() {
    this.props.loadData();
  }

}
const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(Cart)