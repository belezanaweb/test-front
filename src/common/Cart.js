import axios from 'axios';

import DataStore from './DataStore';

const url = '//www.mocky.io/v2/5b15c4923100004a006f3c07';
const dataStoreCardId = 'CartObjProducts';

const Cart = {

  getCache: () => DataStore.get(dataStoreCardId),

  get: async (force) => {

    let objProducts;

    if (!force) objProducts = DataStore.get(dataStoreCardId);

    if (force || !objProducts) {

      try {

        const { data } = await axios.get(url);
        objProducts = data || {};

      } catch (e) {

        objProducts = {};

      }

      DataStore.set(dataStoreCardId, objProducts);

    }

    return objProducts;

  },

};

export default Cart;
