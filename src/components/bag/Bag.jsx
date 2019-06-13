import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';

import ProductsBox from './productsBox';
import CalcBox from './calcBox';
import styles from './styles';
import Cart from '../../common/Cart';

class Bag extends Component {

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

        </div>
      </div>
    );

  }

}

export default Bag;
