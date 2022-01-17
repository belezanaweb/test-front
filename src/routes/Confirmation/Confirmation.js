import React from 'react'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import ProductList from '../../components/ProductList/ProductList'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  confirmationCard: {}
})
const Confirmation = () => {
  const classes = useStyles()

  return (
    <div data-testid="Confirmation">
      <div className={classes.confirmationCard}>
        <ProductList listType="confirmationScreen"></ProductList>
        <OrderSummary />
      </div>
    </div>
  )
}

export default Confirmation
