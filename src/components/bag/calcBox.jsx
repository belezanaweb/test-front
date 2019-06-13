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

    <div>

      {normalizePrice(total)}

    </div>

  );

};

CalcBox.propTypes = {
  objProducts: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CalcBox;
