import Loadable from 'react-loadable';
import { SkeletonPage } from './components';

export default [
  {
    title: 'Sacola',
    path: '/checkout/cart',
    disabled: true,
    page: Loadable({
      loader: () => import(/* webpackChunkName: 'checkout-cart' */ './pages/checkout-cart'),
      loading: SkeletonPage
    })
  },
  {
    title: 'Pagamento',
    path: '/checkout/cart/payment',
    disabled: true,
    page: Loadable({
      loader: () => import(/* webpackChunkName: 'checkout-payment' */ './pages/checkout-payment'),
      loading: SkeletonPage
    })
  },
  {
    title: 'Confirmação',
    path: '/checkout/cart/confirmation',
    disabled: true,
    page: Loadable({
      loader: () =>
        import(/* webpackChunkName: 'checkout-confirmation' */ './pages/checkout-confirmation'),
      loading: SkeletonPage
    })
  }
];
