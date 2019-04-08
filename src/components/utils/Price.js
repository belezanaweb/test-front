/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const PriceContainer = styled('div')`
  margin: 20px 10px 0 9px;
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #CCC;
`
const Price = (props) => {
  const { total, shippingTotal, discount, subTotal } = props
  return (
    <PriceContainer>
      <p>Produtos {subTotal}</p>
      <p>Frete {shippingTotal}</p>
      <p>Desconto {discount}</p>
      <p>Total {total}</p>
    </PriceContainer>
  )
}

export default Price