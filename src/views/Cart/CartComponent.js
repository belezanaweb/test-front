import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import ProductListSection from '../../modules/checkout/components/ProductListSection'
import Button from '../../components/Button'
import SummarySection from '../../modules/checkout/components/SummarySection'

function CartComponent ({ order, onProceed = () => undefined }) {
  return (
    <CartComponent.Container>
      <h1 className="visually-hidden">Sacola</h1>
      {order && order.items && (
        <ProductListSection area="products" image="small" showPrice items={order.items} />
      )}
      <CartComponent.SummarySection area="summary" order={order} />
      <Button area="next" data-testid="button-next" onClick={onProceed}>
        Seguir para o pagamento
      </Button>
    </CartComponent.Container>
  )
}

CartComponent.propTypes = {
  onProceed: PropTypes.func,
  order: PropTypes.shape({
    items: ProductListSection.propTypes.items
  })
}

CartComponent.Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'products' 'summary' 'next';
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 10px;

  @media screen and (min-width: 1024px) {
    grid-template-areas: 'products summary' 'products next';
    grid-template-rows: max-content auto;
  }
`

CartComponent.SummarySection = styled(SummarySection)`
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
  }
`

export default CartComponent
