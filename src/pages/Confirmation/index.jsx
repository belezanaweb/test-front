import React from 'react'
import { Container } from './styles'
import loadable from '@loadable/component'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})
const PaymentInformation = loadable(() => import('../../components/PaymentInformation'), {
  resolveComponent: (components) => components.PaymentInformation
})
const Summary = loadable(() => import('../../components/Summary'), {
  resolveComponent: (components) => components.Summary
})
const Products = loadable(() => import('../../components/Products'), {
  resolveComponent: (components) => components.Products
})

export const Confirmation = () => {
  return (
    <>
      <Header />
      <Container>
        <PaymentInformation />
        <Products />
        <Summary />
      </Container>
    </>
  )
}
