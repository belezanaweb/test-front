import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';
import Cart from '../../common/Cart';

class Payment extends PureComponent {

  objProducts = Cart.read();

  componentDidMount = async () => {

    if (!this.objProducts) {

      this.objProducts = await Cart.download();
      this.forceUpdate();

    }

  }

  render() {

    if (!this.objProducts) {

      /**
       * TODO: maybe create here a message/image "Carregando..."
       */
      return null;

    }

    const {
      items,
      error,
    } = this.objProducts;

    // TODO: do a better error/empty bag handling
    if (error) return (<div className={css(styles.errorMsg)}>{error}</div>);
    if (!items) return (<div className={css(styles.errorMsg)}>Sem itens na sacola</div>);

    return (
      <div>
        Payment...<br />
        {this.objProducts.subTotal}
      </div>
    );

  }

}

export default Payment;
