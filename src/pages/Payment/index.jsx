import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const CartPrice = loadable(() => import('../../components/CartPrice'), {
  resolveComponent: (components) => components.CartPrice
})

const Button = loadable(() => import('../../components/Button'), {
  resolveComponent: (components) => components.Button
})

export const Payment = () => {
  return (
    <>
      <Header />
      <Section></Section>
      <Section>
        <CartPrice cartPrice={null} />
      </Section>
      <Section>
        <Button path={'/success'} text={'Finalizar o pedido'} />
      </Section>
    </>
  )
}
