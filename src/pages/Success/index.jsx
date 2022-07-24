import React from 'react'
import { Section } from './style'
import { DataContext } from '../../context'
import { Header } from '../../components/Header'
import { Message } from '../../components/Message'
import { CartItems } from '../../components/CartItems'
import { CartPrice } from '../../components/CartPrice'
import { PaymentInfo } from '../../components/PaymentInfo'

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
