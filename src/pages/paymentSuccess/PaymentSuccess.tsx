import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PageTitle from '../../components/elements/pageTitle/PageTitle'
import Layout from '../../components/layouts/checkout/Checkout'
import PaymentInfo from '../../components/modules/paymentInfo/PaymentInfo'
import PurchaseProducts from '../../components/modules/purchaseProducts/PurchaseProducts'
import PurchaseSummary from '../../components/modules/purchaseSummary/PurchaseSummary'
import SuccessMessage from '../../components/modules/successMessage/SuccessMessage'

import { CART_PATH } from '../../constants/paths'

import { PurchaseContext } from '../../contexts/PurchaseContext'

import { StyledPaymentSuccessPage } from './PaymentSuccess.styled'

function PaymentSuccessPage() {
  const navigate = useNavigate()

  const { paymentInfo } = useContext(PurchaseContext)

  useEffect(() => {
    if (!paymentInfo) {
      navigate(CART_PATH)
    }
  })

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
