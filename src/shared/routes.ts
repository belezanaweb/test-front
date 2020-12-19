import * as React from 'react';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./screens/home'));
const CartPage = loadable(() => import('./screens/cart'));
const PaymentPage = loadable(() => import('./screens/payment'));
const SuccessPage = loadable(() => import('./screens/success'));
const ErrorPage = loadable(() => import('./screens/not-found'));

export interface RouteConfig {
  path: string;
  exact?: boolean;
  routes?: RouteConfig[];
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/carrinho/:id',
    component: CartPage,
  },
  {
    path: '/pagamento/:id',
    component: PaymentPage,
  },
  {
    path: '/sucesso/:id',
    component: SuccessPage,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];
