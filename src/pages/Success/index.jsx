import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'
import { DataContext } from '../../context'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const Message = loadable(() => import('../../components/Message'), {
  resolveComponent: (components) => components.Message
})

const CartItems = loadable(() => import('../../components/CartItems'), {
  resolveComponent: (components) => components.CartItems
})

const CartPrice = loadable(() => import('../../components/CartPrice'), {
  resolveComponent: (components) => components.CartPrice
})

const PaymentInfo = loadable(() => import('../../components/PaymentInfo'), {
  resolveComponent: (components) => components.PaymentInfo
})

export const Success = () => {
  const [products] = React.useContext(DataContext)

  return (
    <>
      <Header />
      <Section>
        <Message text={'Compra efetuada com sucesso'} />
      </Section>
      <Section>
        <PaymentInfo paymentInfo={products.creditCard} />
      </Section>
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
