import React from 'react'

import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  card: {
    display: 'flex',
    padding: [12, 5],
    borderRadius: 3,
    margin: { bottom: 15 },
    border: {
      width: 1,
      style: 'solid',
      color: '#EEE',
    },
    '&:last-child': {
      margin: { bottom: 0 },
    }
  },
  column: {
    padding: [0, 5],
    '&:last-child': {
      flex: 'auto',
    }
  },
  thumb: {
    height: 65,
    width: 65,
  },
  productName: {
    display: 'block',
    lineHeight: '16px',
    fontSize: 13,
    color: '#212122',
    height: 32,
    overflow: 'hidden',
    margin: { bottom: 15 },
    textAlign: 'left',
  },
  productPrice: {
    display: 'block',
    color: '#212122',
    lineHeight: '17px',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

const CartItem = ({
  name,
  thumb,
  price,
}) =>
  <div className={classes.card}>
    <div className={classes.column + ' ' + classes.thumb}>
      <img src={thumb} title={name} className={classes.thumb} />
    </div>
    <div className={classes.column}>
      <span className={classes.productName}>{name}</span>
      <span className={classes.productPrice}>R$ {price.toFixed(2).replace('.', ',')}</span>
    </div>
  </div>

export default CartItem
