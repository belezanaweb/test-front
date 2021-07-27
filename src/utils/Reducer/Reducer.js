import React from 'react'

const initialState = {
  shoppingCart: {
    items: [],
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  },
  creditCard: {
    number: '',
    name: '',
    expiration: ''
  }
}

function reducer(state, action) {
  switch (('Action', action.type)) {
    case 'SET_SHOPPING_CART': {
      return {
        ...state,
        shoppingCart: action.payload
      }
    }

    case 'SET_CREDIT_CARD': {
      return {
        ...state,
        creditCard: action.payload
      }
    }

    default:
      return state
  }
}

// Export hook
export default function useCustomReducer() {
  return React.useReducer(reducer, initialState)
}
