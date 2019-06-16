import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from '../common/productBox/ProductsBox';

import styles from './styles';

class Bag extends PureComponent {

  render() {

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>
          <div className={css(styles.prodCalc)}>
            <ProductsBox isHome />
          </div>
        </div>
      </div>
    );

  }

}

export default Bag;
