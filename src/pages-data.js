import Loadable from 'react-loadable';

import Skeleton from '~/components/Skeleton';

export default [
  {
    title: 'Sacola',
    path: '/checkout/cart',
    disabled: true,
    page: Loadable({
      loader: () => import('~/pages/CheckoutCart'),
      loading: Skeleton
    })
  },
  {
    title: 'Pagamento',
    path: '/checkout/cart/payment',
    disabled: true,
    page: Loadable({
      loader: () => import('~/pages/CheckoutPayment'),
      loading: Skeleton
    })
  },
  {
    title: 'Confirmação',
    path: '/checkout/cart/confirmation',
    disabled: true,
    page: Loadable({
      loader: () => import('~/pages/CheckoutConfirmation'),
      loading: Skeleton
    })
  }
];
