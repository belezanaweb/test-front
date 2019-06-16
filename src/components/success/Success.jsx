import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from '../common/productBox/ProductsBox';
import CalcBox from '../common/calcBox/CalcBox';
import Cart from '../common/cart/Cart';
import DataStore from '../common/dataStore/DataStore';

import styles from './styles';

import { isEmptyObj } from '../../utils/isEmpty';

import checkImg from '../../assets/images/check.png';
import circleImg from '../../assets/images/circle.png';

class Success extends PureComponent {

  sharedObjProducts = Cart.shared();

  sharedUserData = DataStore.shared('userData');

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
    if (error) return (
      <div className={css(styles.errorMsg)}>{error}</div>
    );
    if (!items) return (
      <div className={css(styles.errorMsg)}>Sem itens na sacola</div>
    );

    let valueCardMasked = '';
    const {
      valueCard = '',
      valueName = '',
      valueExpires = '',
    } = this.sharedUserData;

    if (valueCard) {

      const [,,, valueCardLast] = valueCard.split('.');
      valueCardMasked = `****.****.****.${valueCardLast || '****'}`;

    }

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>

          <div className={css(styles.prodCalc)}>

            <div className={css(styles.prodCalcLeft)}>

              <div className={css(styles.successBox)}>
                <div className={css(styles.successImages)}>
                  <div className={css(styles.checkImageDiv)}>
                    <img
                      src={checkImg}
                      alt=""
                    />
                  </div>
                  <img
                    src={circleImg}
                    alt=""
                  />
                </div>
                <div>
                  COMPRA EFETUADA COM SUCESSO
                </div>
              </div>

              <div className={css(styles.paymentBox)}>
                <div className={css(styles.title)}>
                  PAGAMENTO
                </div>
                <div className={css(styles.paymentContent)}>
                  <div className={css(styles.row)}>
                    <div>Número do cartão:</div><div>{valueCardMasked}</div>
                  </div>
                  <div className={css(styles.row)}>
                    <div>Nome:</div><div>{valueName.toUpperCase()}</div>
                  </div>
                  <div className={css(styles.row)}>
                    <div>Expira em:</div><div>{valueExpires}</div>
                  </div>
                </div>
              </div>

              <ProductsBox />
            </div>

            <div className={css(styles.prodCalcRight)}>
              <CalcBox className={css(styles.calcBox)} />
            </div>

          </div>

        </div>
      </div>
    );

  }

}

export default Success;
