import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import alerta from './alerta/reducer';
import loading from './loading/reducer';
import cart from './cart/reducer';

export default history =>
  combineReducers({
    loading,
    alerta,
    cart,
    router: connectRouter(history),
  });
