import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import CreditCardSection from '../../modules/checkout/components/CreditCardSection'
import SummarySection from '../../modules/checkout/components/SummarySection'
import Button from '../../components/Button'

function CartComponent ({ order, onProceed = () => undefined }) {
  const [payment, setPaymentData] = useState(undefined)

  const handleProceed = () => {
    if (!payment) {
      return
    }

    onProceed({ order, payment })
  }

  return (
    <CartComponent.Container>
      <CreditCardSection area="creditcard" setCreditCard={setPaymentData} />
      <CartComponent.SummarySection area="summary" order={order} />
      <Button area="next" disabled={!payment} onClick={handleProceed}>
        Finalizar o pedido
      </Button>
    </CartComponent.Container>
  )
}

CartComponent.propTypes = {
  onProceed: PropTypes.func,
  order: PropTypes.object
}

CartComponent.Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'creditcard' 'summary' 'next';
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 10px;

  @media screen and (min-width: 1024px) {
    grid-template-areas: 'creditcard summary' 'creditcard next';
    grid-template-rows: max-content auto;
  }
`

CartComponent.SummarySection = styled(SummarySection)`
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
  }
`

export default CartComponent
