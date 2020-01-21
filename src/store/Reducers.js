import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import alerta from 'store/alerta/reducer';
import loading from 'store/loading/reducer';
import cart from 'store/cart/reducer';

export default history =>
  combineReducers({
    loading,
    alerta,
    cart,
    router: connectRouter(history),
  });
