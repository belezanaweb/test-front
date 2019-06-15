import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import normalizePrice from '../../utils/normalizePrice';
import Cart from '../../common/Cart';
import styles from './styles';

const CalcBox = (props) => {

  const { className } = props;

  const objProducts = Cart.shared();

  const {
    subTotal,
    shippingTotal,
    discount,
    total,
  } = objProducts;

  return (

    <div className={`${css(styles.container)} ${className}`}>
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

CalcBox.propTypes = {
  className: PropTypes.string,
};

CalcBox.defaultProps = {
  className: '',
};


export default CalcBox;
