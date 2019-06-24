import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import SuccessMessage from '../../components/SuccessMessage'
import PaymentSummarySection from '../../modules/checkout/components/PaymentSummarySection'
import ProductListSection from '../../modules/checkout/components/ProductListSection'
import SummarySection from '../../modules/checkout/components/SummarySection'

function ConfirmationComponent ({ order, payment }) {
  return (
    <ConfirmationComponent.Container>
      <SuccessMessage area="success" />
      <PaymentSummarySection area="payment" payment={payment} />
      {order && order.items && (
        <ProductListSection area="products" image="thumbnail" items={order.items} />
      )}
      <ConfirmationComponent.SummarySection area="summary" order={order} />
    </ConfirmationComponent.Container>
  )
}

ConfirmationComponent.propTypes = {
  order: PropTypes.object,
  payment: PropTypes.object
}

ConfirmationComponent.Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'success' 'payment' 'products' 'summary';
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 10px;

  @media screen and (min-width: 1024px) {
    grid-template-areas: 'success success' 'products payment' 'products summary';
  }
`

ConfirmationComponent.SummarySection = styled(SummarySection)`
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
  }
`

export default ConfirmationComponent
