import React from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import normalizePrice from '../../utils/normalizePrice';
import styles from './styles';

const CalcBox = (props) => {

  const { objProducts } = props;

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
        <div>DESCONTO</div><div>- {normalizePrice(discount)}</div>
      </div>
      <div className={css(styles.calcRow, styles.calTotal)}>
        <div>TOTAL</div><div>{normalizePrice(total)}</div>
      </div>
    </div>

  );

};

CalcBox.propTypes = {
  objProducts: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CalcBox;
