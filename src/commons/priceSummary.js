import React from 'react';
import './priceSummary.css';

const PriceSummary = ({ subTotal, shippingTotal, discount, total }) => (
  <div className="summary">
    <div className="row">
      <span>PRODUTOS</span>
      <span data-testid="subTotal" className="value">
        R$ {subTotal.toFixed(2)}
      </span>
    </div>
    <div className="row">
      <span>FRETE</span>
      <span data-testid="shippingTotal" className="value">
        R$ {shippingTotal.toFixed(2)}
      </span>
    </div>
    <div className="row discount">
      <span>DESCONTO</span>
      <span data-testid="discount" className="value">
        R$ {discount.toFixed(2)}
      </span>
    </div>
    <div className="row total">
      <span>TOTAL</span>
      <span data-testid="total" className="value">
        R$ {total.toFixed(2)}
      </span>
    </div>
  </div>
);

export { PriceSummary };
