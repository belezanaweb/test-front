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
  },
  user: {
    wallet: {
      creditCard: {
        name: '',
        valid: '',
        number: '',
      }
    }
  }
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BAG':
      return {
        ...state,
        bag: action.bag,
      };
    case 'UPDATE_CARD_USER':
      return {
        ...state,
        user: {
          wallet: {
            creditCard: action.creditCard,
          }
        }
      };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
