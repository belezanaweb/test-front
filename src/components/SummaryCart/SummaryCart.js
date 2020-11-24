import React from 'react'
import styled from 'styled-components'
import { formatCurrency } from './../../utils/utils'
import * as palette from './../../styles/variables'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 20px 0 7px 0;
  align-content: space-around;
  max-height: 90px;
  padding: 15px;
  @media (min-width: 900px) {
    width: 93%;
    margin: 0px 0 7px 0;
    padding: 13px;
  }
`
const Line = styled.div`
  display: flex;
  margin: 2px 0;
  justify-content: space-between;
`

const DescText = styled.span`
  font-size: ${palette.FONTSIZE_2};
  font-family: ${palette.FONT_FAMILY};
`

const DiscountText = styled(DescText)`
  color: ${palette.PRIMARY};
`

const TotalText = styled(DescText)`
  font-weight: bold;
`

export default function SummaryCart(props) {
  const { shippingTotal, discount, subTotal } = props.info
  const total = subTotal + shippingTotal - discount

  return (
    <Container>
      <Line>
        <DescText>{'PRODUTOS'}</DescText>
        <DescText>{subTotal ? formatCurrency(subTotal) : null}</DescText>
      </Line>
      <Line>
        <DescText>{'FRETE'}</DescText>
        <DescText>{shippingTotal ? formatCurrency(shippingTotal) : null}</DescText>
      </Line>
      <Line>
        <DiscountText>{'DESCONTO'}</DiscountText>
        <DiscountText>{discount ? `- ${formatCurrency(discount)}` : null}</DiscountText>
      </Line>
      <Line>
        <TotalText>{'TOTAL'}</TotalText>
        <TotalText>{total ? formatCurrency(total) : null}</TotalText>
      </Line>
    </Container>
  )
}
