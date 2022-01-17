import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  },
  withWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    border: 'solid #EEE 1px',
    borderRadius: '3px',
    boxSizing: 'border-box',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginBottom: '15px',
    justifyContent: 'space-between',
    padding: '0 10px'
  },
  productInfo: {
    flex: '1'
  }
})

const CartItem = (props) => {
  const { imageSrc, name, price } = props
  const classes = useStyles()

  return (
    <div className={(classes.cartItem, classes.withWrapper)}>
      <div>
        <img src={imageSrc} alt={name}></img>
      </div>
      <div className={classes.productInfo}>
        <p className={classes.cardItemText}>{name}</p>
        <p className={classes.cardItemPrice}>{price}</p>
      </div>
    </div>
  )
}

export default CartItem
