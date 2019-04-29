import { createStore } from 'redux';

const initialState = {
  bag: {
    resume: {
      discount: 0,
      shippingTotal: 0,
      subTotal: 0,
      total: 0
    },
    products: []
  }
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BAG':
      return {
        ...state,
        bag: action.bag,
      };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
