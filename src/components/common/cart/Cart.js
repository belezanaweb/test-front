import axios from 'axios';

import DataStore from '../dataStore/DataStore';

import {
  isHotAccess,
  endpoint,
} from '../../../settings';

const dataStoreCardId = 'CartObjProducts';
const dataStoreCardCookie = 'CartObjProductsCookie';

const Cart = {

  shared: () => DataStore.shared(dataStoreCardId),

  readOnly: () => DataStore.readOnly(dataStoreCardId),

  download: async () => {

    const { cookie } = isHotAccess ? DataStore.shared(dataStoreCardCookie) : {};

    let objProducts;

    const query = isHotAccess && cookie ? `?cookie=${cookie}` : '';

    const url = `${endpoint}${query}`;

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

  add: async (sku) => {

    const shared = DataStore.shared(dataStoreCardCookie);

    const url = endpoint;

    let objProducts;

    const postData = {
      data: [{
        quantity: 1,
        deliveredPhysicalStore: null,
        product:
        {
          sku,
        },
      }],
    };

    if (shared.cookie) {

      postData.cookie = shared.cookie;

    }

    try {

      const { data } = await axios.post(url, postData, { headers: { 'Content-Type': 'application/json' } });
      objProducts = data || {};

    } catch (error) {

      // TODO: do a better error handling
      return { error: 'Erro acessando API do carrinho' };

    }

    const { cookie } = objProducts;

    if (cookie) {

      for (let i = 0; i < cookie.length; i += 1) {

        [cookie[i]] = cookie[i].split(';');

      }
      delete objProducts.cookie;

      shared.cookie = cookie.join('; ');

    }

    objProducts = await Cart.download();

    return objProducts;

  },

};

export default Cart;
