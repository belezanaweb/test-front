import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const CartItem = loadable(() => import('../../components/CartItem'), {
  resolveComponent: (components) => components.CartItem
})

export const Cart = () => {
  return (
    <>
      <Header
        items={[
          {
            label: 'sacola'
          },
          {
            label: 'pagamento'
          },
          {
            label: 'confirmação'
          }
        ]}
      />
      <Section>
        <CartItem />
      </Section>
    </>
  )
}
