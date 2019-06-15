import React from 'react';
import { css } from 'aphrodite/no-important';

import normalizePrice from '../../utils/normalizePrice';
import Cart from '../../common/Cart';
import styles from './styles';

const CalcBox = () => {

  const objProducts = Cart.shared();

  const {
    subTotal,
    shippingTotal,
    discount,
    total,
  } = objProducts;

  return (

    <div className={css(styles.container)}>
      <div className={css(styles.calcRow)}>
        <div>PRODUTOS</div><div>{normalizePrice(subTotal)}</div>
      </div>
      <div className={css(styles.calcRow)}>
        <div>FRETE</div><div>{normalizePrice(shippingTotal)}</div>
      </div>
      <div className={css(styles.calcRow, styles.orange)}>
        <div>DESCONTO</div><div>{normalizePrice(-discount)}</div>
      </div>
      <div className={css(styles.calcRow, styles.calTotal)}>
        <div>TOTAL</div><div>{normalizePrice(total)}</div>
      </div>
    </div>

  );

};

export default CalcBox;
