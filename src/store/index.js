import { createStore } from 'redux';

const initialState = {
  bagProducts: []
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BAG':
      return {
        ...state,
        bagProducts: action.products
      };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
