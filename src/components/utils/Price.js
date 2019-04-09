/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const PriceContainer = styled('div')`
  margin: 20px 10px 0 9px;
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #CCC;
  p {
    text-transform: uppercase;
    display: inline-block;
    height: 17px;
    width: 124px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    line-height: 17px;
  }

  .total {
    font-weight: 700;
  }

  .desconto {
    color: #FF7800;
  }
`

const PriceTag = styled('p')`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 17px;
  text-align: right;
`
const DiscountStyle = css`
  margin: 8px 0 0 14px;
`
const DiscountPrice = css`
  margin: 8px 0 0 65px;
`

const Price = (props) => {
  const { total, shippingTotal, discount, subTotal } = props
  return (
    <PriceContainer>
      <div>
        <p css={css`margin: 15px 0 0 14px;`}>Produtos</p>
        <PriceTag css={css`margin: 15px 0 0 65px;`}>R$ {subTotal}</PriceTag>
      </div>
      <div>
        <p css={css`margin: 9px 0 0 14px;`}>Frete</p>
        <PriceTag css={css`margin: 9px 0 0 65px;`}>R$ {shippingTotal}</PriceTag>
      </div>
      <div>
        <p className='desconto' css={DiscountStyle}>Desconto</p>
        <PriceTag className='desconto' css={DiscountPrice}>- R$ {discount}</PriceTag>
      </div>
      <div>
          <p
            className='total'
            css={css`margin: 16px 0 0 14px;`}
          >
            Total
          </p>
          <PriceTag
            className='total'
            css={css`margin: 16px 0 0 65px;`}
          >
            R$ {total}
          </PriceTag>
      </div>
    </PriceContainer>
  )
}

export default Price