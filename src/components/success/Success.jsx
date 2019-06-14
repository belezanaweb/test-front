import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from '../productBox/ProductsBox';
import CalcBox from '../calcBox/CalcBox';
import Cart from '../../common/Cart';

import styles from './styles';

import checkImg from '../../assets/images/check.png';
import circleImg from '../../assets/images/circle.png';

const mockPayment = {
  card: '****.****.****.1234',
  name: 'José da Silva',
  exp: '05/2019',
};

class Success extends PureComponent {

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

    const {
      card,
      name,
      exp,
    } = mockPayment;

    // TODO: do a better error/empty bag handling
    if (error) return (<div className={css(styles.errorMsg)}>{error}</div>);
    if (!items) return (<div className={css(styles.errorMsg)}>Sem itens na sacola</div>);

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>

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
              <div>
                {card}
              </div>
              <div>
                {name.toUpperCase()}
              </div>
              <div>
                {exp}
              </div>
            </div>
          </div>

          <ProductsBox items={items} />

          <CalcBox objProducts={this.objProducts} />

        </div>
      </div>
    );

  }

}

export default Success;
