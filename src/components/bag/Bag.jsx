import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from '../productBox/ProductsBox';
import CalcBox from '../calcBox/CalcBox';
import ContinueButton from '../continueButton/ContinueButton';

import styles from './styles';
import Cart from '../../common/Cart';

import { isEmptyObj } from '../../utils/isEmpty';

class Bag extends PureComponent {

  objProducts = Cart.shared();

  componentDidMount = async () => {

    if (isEmptyObj(this.objProducts)) {

      await Cart.download();
      this.forceUpdate();

    }

  }

  render() {

    if (isEmptyObj(this.objProducts)) {

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
