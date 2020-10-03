import React from 'react';

import Cart from './Cart';
import Payment from './Payment';
import Success from './Success';

export const routes = [
  {
    id: "cart",
    path: "/cart",
    exact: true,
    component: Cart
  },
  {
    id: "payment",
    path: "/payment",
    exact: true,
    component: Payment
  },
  {
    id: "success",
    path: "/success",
    exact: true,
    component: Success
  }
]

export default routes;