/* eslint-disable react/display-name */
import React from 'react';

export default [
  {
    title: 'Sacola',
    path: '/checkout/cart',
    page: () => <div>Sacola</div>
  },
  {
    title: 'Pagamento',
    path: '/checkout/cart/payment',
    page: () => <div>Pagamento</div>
  },
  {
    title: 'Confirmação',
    path: '/checkout/cart/confirmation',
    disabled: true,
    page: () => <div>Confirmação</div>
  }
];
