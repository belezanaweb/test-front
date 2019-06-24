import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled/macro'
import { formatCurrency } from '../../../../helpers/formatCurrency'

function SummarySection ({ order: { discount, shippingTotal, subTotal, total }, ...props }) {
  return (
    <SummarySection.Container {...props}>
      <SummarySection.Term>Produtos</SummarySection.Term>
      <SummarySection.Definition>{formatCurrency(subTotal)}</SummarySection.Definition>
      <SummarySection.Term>Frete</SummarySection.Term>
      <SummarySection.Definition>{formatCurrency(shippingTotal)}</SummarySection.Definition>
      <SummarySection.Term discount>Desconto</SummarySection.Term>
      <SummarySection.Definition discount>{formatCurrency(discount)}</SummarySection.Definition>
      <SummarySection.Term total>Total</SummarySection.Term>
      <SummarySection.Definition total>{formatCurrency(total)}</SummarySection.Definition>
    </SummarySection.Container>
  )
}

SummarySection.propTypes = {
  order: PropTypes.shape({
    discount: PropTypes.number,
    shippingTotal: PropTypes.number,
    subTotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
}

SummarySection.Container = styled.dl`
  align-self: flex-start;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: grid;
  grid-area: ${({ area }) => area || 'auto'};
  grid-gap: 9px 0;
  grid-template-columns: 2fr 1fr;
  padding: 14px 12px 12px;
`

SummarySection.Item = styled.div`
  color: ${({ discount }) => (discount ? '#ff7800' : '#212122')};
  font-size: 14px;
  font-weight: ${({ total }) => (total ? 'bold' : 'normal')};
  line-height: 17px;
  margin: 0;
  padding: ${({ total }) => (total ? '6px 0 0' : 0)};
  text-transform: uppercase;
`

SummarySection.Term = styled(SummarySection.Item)`
  letter-spacing: 1px;
`

SummarySection.Term.defaultProps = {
  as: 'dt'
}

SummarySection.Definition = styled(SummarySection.Item)`
  text-align: right;

  ${({ discount }) =>
    discount
    && css`
      ::before {
        content: '-';
      }
    `}
`

SummarySection.Definition.defaultProps = {
  as: 'dd'
}

export default SummarySection
