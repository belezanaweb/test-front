import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  cartItem: {
    display: 'flex',
    alignItems: 'center'
  },
  cardItemText: {
    fontFamily: 'Helvetica Neue',
    fontSize: '13px',
    letterSpacing: '0.93px',
    lineHeight: '16px'
  },
  cardItemPrice: {
    fontFamily: 'Helvetica Neue',
    fontSize: '13px',
    letterSpacing: '0.93px',
    fontWeight: 'bold',
    textAlign: 'right',
    width: '100%'
  }
})

const CartItem = (props) => {
  const { imageSrc, name, price } = props
  const classes = useStyles()

  return (
    <div className={classes.cartItem}>
      <div>
        <img src={imageSrc} alt={name}></img>
      </div>
      <div>
        <p className={classes.cardItemText}>{name}</p>
        <p className={classes.cardItemPrice}>{price}</p>
      </div>
    </div>
  )
}

export default CartItem
