import React from 'react'
import loadable from '@loadable/component'
import { CartSectionContainer } from './styles'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})
const Products = loadable(() => import('../../components/Products'), {
  resolveComponent: (components) => components.Products
})
const Summary = loadable(() => import('../../components/Summary'), {
  resolveComponent: (components) => components.Summary
})
const ActionButton = loadable(() => import('../../components/ActionButton'), {
  resolveComponent: (components) => components.ActionButton
})

export const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <CartSectionContainer>
          <Products />
        </CartSectionContainer>
        <CartSectionContainer>
          <Summary />
          <ActionButton pathToGo={'/payment'} actionText={'Seguir para o pagamento'} />
        </CartSectionContainer>
      </main>
    </>
  )
}
