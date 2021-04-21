import { Cart } from '../pages/Cart'
import { Payment } from '../pages/Payment'
import { CheckoutConfirm } from '../pages/CheckoutConfirm'

export const routes = [
  {
    id: 1,
    url: '/cart',
    component: Cart
  },
  {
    id: 2,
    url: '/payment',
    component: Payment
  },
  {
    id: 3,
    url: '/checkoutconfirm ',
    component: CheckoutConfirm
  }
]
