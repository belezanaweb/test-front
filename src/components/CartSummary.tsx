import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import formatMoney from '../helper/formatMoney';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(theme => ({
  summary: {
    border: '1px solid #ccc',
    fontSize: 14,
    padding: 13,
    borderRadius: 3
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '& > li': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 0'
    }
  },
  labelDiscount: {
    color: theme.primaryColor.main
  },
  labelTotal: {
    fontWeight: 700
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class CartSummary extends React.Component<IProps> {
  render() {
    const { discount, shippingTotal, subTotal, total } = this.props;
    return (
      <div className={classes.summary}>
        <ul className={classes.list}>
          <li>
            <span>PRODUTOS</span>
            <span>{formatMoney(subTotal)}</span>
          </li>
          <li>
            <span>FRETE</span>
            <span>{formatMoney(shippingTotal)}</span>
          </li>
          <li className={classes.labelDiscount}>
            <span>DESCONTO</span>
            <span>{formatMoney(discount * -1)}</span>
          </li>
          <li />
          <li className={classes.labelTotal}>
            <span>TOTAL</span>
            <span>{formatMoney(total)}</span>
          </li>
        </ul>
      </div>
    );
  }
}

interface IProps {
  shippingTotal: number;
  subTotal: number;
  discount: number;
  total: number;
}
