import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from '../common/productBox/ProductsBox';
import CalcBox from '../common/calcBox/CalcBox';
import ContinueButton from '../common/continueButton/ContinueButton';

import styles from './styles';
import Cart from '../common/cart/Cart';

import { isEmptyObj } from '../../utils/isEmpty';

class Bag extends PureComponent {

  sharedObjProducts = Cart.shared();

  componentDidMount = async () => {

    if (isEmptyObj(this.sharedObjProducts)) {

      await Cart.download();
      this.forceUpdate();

    }

  }

  render() {

    if (isEmptyObj(this.sharedObjProducts)) {

      /**
       * TODO: maybe create here a message/image "Carregando..."
       */
      return null;

    }

    const {
      items,
      error,
    } = this.sharedObjProducts;

    // TODO: do a better error/empty bag handling
    if (error) return (<div className={css(styles.errorMsg)}>{error}</div>);
    if (!items || items.length === 0) return (<div className={css(styles.errorMsg)}>Sem itens na sacola</div>);

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>

          <div className={css(styles.prodCalc)}>
            <ProductsBox />
            <CalcBox className={css(styles.calcBox)} />
          </div>
          <div className={css(styles.continueDiv)}>
            <ContinueButton
              link="/pagamento"
              label="SEGUIR PARA O PAGAMENTO"
            />
          </div>
        </div>
      </div>
    );

  }

}

export default Bag;
