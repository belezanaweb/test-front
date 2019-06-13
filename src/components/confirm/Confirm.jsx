import React, { Component } from 'react';

import Cart from '../../common/Cart';

class Confirm extends Component {

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

    return (
      <div>
        Confirm...<br />
        {this.objProducts.discount}
      </div>
    );

  }

}

export default Confirm;

