import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import formatMoney from '../helper/formatMoney';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  cartItem: {
    padding: 12,
    borderRadius: 3,
    border: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description: {
    textAlign: 'right',
    '& p': {
      fontSize: 13,
      fontWeight: 400,
      margin: 0,
      marginBottom: 15
    },
    '& span': {
      fontSize: 14,
      fontWeight: 700
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class CartItem extends React.Component<IProps> {
  render() {
    const { thumbnail, name, originalPrice } = this.props;
    return (
      <div className={classes.cartItem}>
        <img src={thumbnail} alt={name} />
        <div className={classes.description}>
          <p>{name}</p>
          <span>{formatMoney(originalPrice)}</span>
        </div>
      </div>
    );
  }
}

interface IProps {
  name: string;
  thumbnail: string;
  originalPrice: number;
}
