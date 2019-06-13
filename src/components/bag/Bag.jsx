import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import ProductsBox from './productsBox';
import CalcBox from './calcBox';
import styles from './styles';
import Cart from '../../common/Cart';

class Bag extends PureComponent {

  objProducts = null;

  componentDidMount = async () => {

    if (!this.objProducts) {

      this.objProducts = await Cart.get();
      this.forceUpdate();

    }

  }

  render() {

    this.objProducts = Cart.getCache();

    if (!this.objProducts) {

      /**
       * TODO: aqui pode-se colocar uma mensagem/imagem de "Carregando...",
       * se achar necessário
       */
      return null;

    }

    const { items } = this.objProducts;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>

          <div className={css(styles.title)}>
            PRODUTOS
          </div>

          <ProductsBox items={items} />

          <CalcBox objProducts={this.objProducts} />

          <div className={css(styles.goPay)}>
            <Link to="/pagamento" className={css(styles.link)}>
              SEGUIR PARA O PAGAMENTO
            </Link>
          </div>

        </div>
      </div>
    );

  }

}

export default Bag;
