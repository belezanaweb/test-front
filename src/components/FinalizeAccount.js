import React, { Component } from 'react';

class FinalizeAccount extends Component {

  render() {
    let subTotal = this.props.subTotal;
    let shippingTotal = this.props.shippingTotal;
    let discount = this.props.discount;
    let total = this.props.total;

    return (
      <div>
        <div> PRODUTOS {subTotal} </div>
        <div> FRETE {shippingTotal} </div>
        <div> DESCONTO {discount} </div>
        <div> TOTAL {total} </div>
      </div>
    );

  }

}

export default FinalizeAccount;