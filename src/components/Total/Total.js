import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import { brl } from '../../helpers/currency'

const StyledTotal = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 0 12px 15px 12px;
`

const StyledTotalRow = styled.p`
  display: flex;
  justify-content: space-between;
  color: #212122;
  font-size: 14px;
  margin-bottom: -5px;
`

const StyledTotalRowDiscount = styled(StyledTotalRow)`
  color: #ff7800;
  margin-bottom: 17px;
`

const StyledTotalRowTotal = styled(StyledTotalRow)`
  font-weight: 700;
`

function Total(props) {
  return (
    <StyledTotal>
      <StyledTotalRow>
        <span>PRODUTOS</span>
        <span>{brl(props.subTotal)}</span>
      </StyledTotalRow>
      <StyledTotalRow>
        <span>FRETE</span>
        <span>{brl(props.shippingTotal)}</span>
      </StyledTotalRow>
      <StyledTotalRowDiscount>
        <span>DESCONTO</span>
        <span>- {brl(props.discount)}</span>
      </StyledTotalRowDiscount>
      <StyledTotalRowTotal>
        <span>TOTAL</span>
        <span>{brl(props.total)}</span>
      </StyledTotalRowTotal>
    </StyledTotal>
  )
}

Total.propTypes = {
  subTotal: PropTypes.number,
  shippingTotal: PropTypes.number,
  discount: PropTypes.number,
  total: PropTypes.number
}

export default Total
