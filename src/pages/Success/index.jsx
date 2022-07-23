import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'
import { DataContext } from '../../context'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const CartItems = loadable(() => import('../../components/CartItems'), {
  resolveComponent: (components) => components.CartItems
})

const CartPrice = loadable(() => import('../../components/CartPrice'), {
  resolveComponent: (components) => components.CartPrice
})

export const Success = () => {
  const [products, setProducts] = React.useContext(DataContext)

  return (
    <>
      <Header />
      <Section>
        <CartItems products={products.items} />
      </Section>
      <Section>
        <CartPrice cartPrice={products} />
      </Section>
      <br />
    </>
  )
}
