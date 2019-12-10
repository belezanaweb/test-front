import React, { Component } from 'react';
import ProductList from '../components/ProdutctList';
import FinalizeAccount from '../components/FinalizeAccount';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index.js'

class Cart extends Component {
  render() {
    return (
      <div>
        Cart
        <ProductList 
          items={this.props.items}
        />
        <FinalizeAccount 
          subTotal={this.props.subTotal} 
          shippingTotal={this.props.shippingTotal} 
          discount={this.props.discount} 
          total={this.props.total} 
        />
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