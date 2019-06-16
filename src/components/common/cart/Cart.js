import axios from 'axios';

import DataStore from '../dataStore/DataStore';

const url = '//www.mocky.io/v2/5b15c4923100004a006f3c07';
const dataStoreCardId = 'CartObjProducts';

const Cart = {

  shared: () => {

    const data = DataStore.shared(dataStoreCardId);

    return data;

  },

  readOnly: () => DataStore.readOnly(dataStoreCardId),

  download: async () => {

    // return {};

    let objProducts;

    try {

      /**
       * Warning: during the development the url was unavailable several times
       */
      const { data } = await axios.get(url);
      objProducts = data || {};

    } catch (error) {

      // TODO: do a better error handling
      return { error: 'Erro acessando API do carrinho' };

    }

    return DataStore.store(dataStoreCardId, objProducts);

  },

};

export default Cart;
