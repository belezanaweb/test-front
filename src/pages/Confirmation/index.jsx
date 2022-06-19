import React from 'react'
import { SectionContainer, SuccessMessage } from './styles'
import { Header } from '../../components/Header'
import { PaymentInformation } from '../../components/PaymentInformation'
import { Summary } from '../../components/Summary'
import { Products } from '../../components/Products'
import loadable from '@loadable/component'

// const Header = loadable(() => import('../../components/Header'), {
//   resolveComponent: (components) => components.Header
// })
// const PaymentInformation = loadable(() => import('../../components/PaymentInformation'), {
//   resolveComponent: (components) => components.PaymentInformation
// })
// const Summary = loadable(() => import('../../components/Summary'), {
//   resolveComponent: (components) => components.Summary
// })
// const Products = loadable(() => import('../../components/Products'), {
//   resolveComponent: (components) => components.Products
// })

export const Confirmation = () => {
  return (
    <>
      <Header />
      <SuccessMessage>
        <div>
          <div></div>
        </div>
        <p id="success-message">Compra Efetuada com Sucesso</p>
      </SuccessMessage>
      <main>
        <SectionContainer>
          <PaymentInformation />
          <Products />
        </SectionContainer>
        <SectionContainer>
          <Summary />
        </SectionContainer>
      </main>
    </>
  )
}
