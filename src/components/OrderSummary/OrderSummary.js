import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { CartContext } from '../../components/Context/Context'
import { currencyFormatter } from '../../utils'

const useStyles = createUseStyles({
  orderSummary: {
    border: '1px solid #777',
    width: '80%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '10px',
    borderRadius: '3px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },
  summaryRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '26px',
    textTransform: 'uppercase'
  },
  discount: {
    color: '#FF6C00'
  },
  total: {
    marginTop: '10px',
    fontWeight: 'bold'
  }
})

const OrderSummary = () => {
  const classes = useStyles()
  const cartContext = useContext(CartContext)

  const renderSummaryRows = () => {
    return (
      <>
        <div className={classes.summaryRow}>
          <span>Produtos</span>
          <span>{currencyFormatter.format(cartContext.cartProductsData.data?.subTotal)}</span>
        </div>
        <div className={classes.summaryRow}>
          <span>Frete</span>
          <span>{currencyFormatter.format(cartContext.cartProductsData.data?.shippingTotal)}</span>
        </div>
        <div className={`${classes.summaryRow} ${classes.discount}`}>
          <span>Desconto</span>
          <span>- {currencyFormatter.format(cartContext.cartProductsData.data?.discount)}</span>
        </div>
        <div className={`${classes.summaryRow} ${classes.total}`}>
          <span>Total</span>
          <span>{currencyFormatter.format(cartContext.cartProductsData.data?.total)}</span>
        </div>
      </>
    )
  }

  return (
    <div className={classes.orderSummary}>
      {cartContext.cartProductsData.data && renderSummaryRows()}
    </div>
  )
}

export default OrderSummary
