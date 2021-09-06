import { lazy } from 'react'

const Checkout = lazy(() => import('../containers/checkout'))

export default [
  {
    key: 'checkout',
    path: '/',
    exact: true,
    component: Checkout
  }
]
