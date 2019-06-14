import axios from 'axios';

import DataStore from './DataStore';

const url = '//www.mocky.io/v2/5b15c4923100004a006f3c07';
const dataStoreCardId = 'CartObjProducts';

const Cart = {

  read: () => DataStore.get(dataStoreCardId),

  download: async () => {

    let objProducts;

    try {

      /**
       * Warning: during the development the url was unavailable several times
       */
      const { data } = await axios.get(url);
      objProducts = data || {};

    } catch (error) {

      // TODO: do a better error handling
      objProducts = { error: 'Erro acessando API do carrinho' };

    }

    DataStore.set(dataStoreCardId, objProducts);

    return objProducts;

  },

};

export default Cart;
