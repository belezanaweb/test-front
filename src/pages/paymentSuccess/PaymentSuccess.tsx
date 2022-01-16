import React from 'react'
import PageTitle from '../../components/elements/pageTitle/PageTitle'

import Layout from '../../components/layouts/checkout/Checkout'
import PaymentInfo from '../../components/modules/paymentInfo/PaymentInfo'
import PurchaseProducts from '../../components/modules/purchaseProducts/PurchaseProducts'
import PurchaseSummary from '../../components/modules/purchaseSummary/PurchaseSummary'
import SuccessMessage from '../../components/modules/successMessage/SuccessMessage'

import { StyledPaymentSuccessPage } from './PaymentSuccess.styled'

function PaymentSuccessPage() {
  return (
    <Layout>
      <StyledPaymentSuccessPage>
        <SuccessMessage message="Compra efetuada com sucesso" />
        <section id="paymentSection">
          <PageTitle text="Pagamento" />
          <PaymentInfo />
        </section>
        <section id="productSection">
          <PageTitle text="Produtos" />
          <PurchaseProducts showPrice={false} />
        </section>
        <PurchaseSummary />
      </StyledPaymentSuccessPage>
    </Layout>
  )
}

export default PaymentSuccessPage
