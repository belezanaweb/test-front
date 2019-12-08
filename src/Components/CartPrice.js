import React, { Component } from 'react';
import intlUtils from '../Intl.Utils';
import './CartPrice.css';

class CartPrice extends Component
{
  render() {
    return (
      <div className="cart-price">
        <div>
          <span>PRODUTOS</span>
          <span>{intlUtils.formatCurrency(this.props.locale === undefined ? "pt-br" : this.props.locale, this.props.currency, this.props.products.subTotal)}</span>
        </div>
        <div>
          <span>FRETE</span>
          <span>{intlUtils.formatCurrency(this.props.locale === undefined ? "pt-br" : this.props.locale, this.props.currency, this.props.products.shippingTotal)}</span>
        </div>
        <div className="text-highlight">
          <span>DESCONTO</span>
          <span>- {intlUtils.formatCurrency(this.props.locale === undefined ? "pt-br" : this.props.locale, this.props.currency, this.props.products.discount)}</span>
        </div>
        <div className="text-bold">
          <span>TOTAL</span>
          <span>{intlUtils.formatCurrency(this.props.locale === undefined ? "pt-br" : this.props.locale, this.props.currency, (this.props.products.subTotal + this.props.products.shippingTotal) - this.props.products.discount)}</span>
        </div>
      </div>
    );
  }
}

export default CartPrice;
