import React, { Component } from 'react';
import intlUtils from '../Intl.Utils';
import './CartPrice.css';

class CartPrice extends Component
{
  render() {
    const { locale, products, currency } = this.props;

    return (
      <div className="cart-price">
        <div>
          <span>PRODUTOS</span>
          <span>{intlUtils.formatCurrency(
            locale === undefined ? "pt-br" : locale,
            currency === undefined ? 'brl' : currency,
            products === undefined ? 0 : products.subTotal)}</span>
        </div>
        <div>
          <span>FRETE</span>
          <span>{intlUtils.formatCurrency(
            locale === undefined ? "pt-br" : locale,
            currency === undefined ? 'brl' : currency,
            products === undefined ? 0 : products.shippingTotal)}</span>
        </div>
        <div className="text-highlight">
          <span>DESCONTO</span>
          <span>- {intlUtils.formatCurrency(
            locale === undefined ? "pt-br" : locale,
            currency === undefined ? 'brl' : currency,
            products === undefined ? 0 : products.discount)}</span>
        </div>
        <div className="text-bold">
          <span>TOTAL</span>
          <span>{intlUtils.formatCurrency(
            locale === undefined ? "pt-br" : locale,
            currency === undefined ? 'brl' : currency,
            products === undefined ? 0 : (products.subTotal + products.shippingTotal) - products.discount)}</span>
        </div>
      </div>
    );
  }
}

export default CartPrice;
