/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types';

const Summary = styled('section')`
  background-color: transparent;
	padding: 14px;
	margin-top: 20px;
	border-radius: 3px;
	min-width: 285px;
  border: solid 1px #D6D6D6;
  
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
    font-size: 14px;
  }

  .first-child {
    margin-top: 0;
  }
  .last-child {
    margin-top: 16px;
  }
  .orange {
    color: #FF7800;
  }

  .total{
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }
`
const PurchaseSummary = ({shoppingCart}) => {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const subTotal = shoppingCart.discount && (shoppingCart.subTotal).toLocaleString('pt-BR', format)
    const shippingTotal = shoppingCart.discount && (shoppingCart.shippingTotal).toLocaleString('pt-BR', format)
    const discount = shoppingCart.discount && (shoppingCart.discount).toLocaleString('pt-BR', format)
    const total = shoppingCart.discount && (shoppingCart.total).toLocaleString('pt-BR', format)

    return(
        <Summary>
            <div className='first-child'>
                <span>PRODUTOS</span>
                <span>{subTotal}</span>
            </div>
            <div>
                <span>FRETE</span>
                <span>{shippingTotal}</span>
            </div>
            <div className='orange'>
                <span>DESCONTO</span>
                <span>- {discount}</span>
            </div>
            <div className='last-child'>
                <span className='total'>TOTAL</span>
                <span className='total'>{total}</span>
            </div>
        </Summary>
    )
}


PurchaseSummary.propTypes = {
    shoppingCart: PropTypes.object.isRequired,
}

export default PurchaseSummary