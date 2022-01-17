import React from 'react'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import ProductList from '../../components/ProductList/ProductList'
import PaymentSummary from '../../components/PaymentSummary/PaymentSummary'
import { createUseStyles } from 'react-jss'
import shape from '../../assets/images/Shape.png'

const useStyles = createUseStyles({
  confirmation: {
    width: '95%'
  },
  successTip: {
    textTransform: 'uppercase',
    height: '17px',
    width: '266.27px',
    color: '#FF7800',
    fontFamily: 'Helvetica Neue',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '17px',
    textAlign: 'center',
    margin: '11px auto 20px'
  },
  successIcon: {
    border: '2px solid #FF7800',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto 0px'
  }
})
const Confirmation = () => {
  const classes = useStyles()

  return (
    <div data-testid="Confirmation" className={classes.confirmation}>
      <div className={classes.confirmationCard}>
        <div className={classes.successIcon}>
          <img src={shape} alt="Success" height="15.01px" />
        </div>
        <h2 className={classes.successTip}>Compra Efetuada com Sucesso!</h2>
        <PaymentSummary />
        <ProductList listType="confirmationScreen" />
        <OrderSummary />
      </div>
    </div>
  )
}

export default Confirmation
