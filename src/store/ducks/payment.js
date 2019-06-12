export const Types = {
  GET_PAYMENT: 'GET_PAYMENT',
  SET_PAYMENT: 'SET_PAYMENT',
}

const INITIAL_STATE = {
  data: {},
}

export default function payment(state= INITIAL_STATE, action){
  switch (action.type) {
    case Types.GET_PAYMENT:
      return {...state}
    case Types.SET_PAYMENT:
      return {...state, data: action.data}
    default:
      return state;
  }
}

export const Creators = {
  getPayment: () => ({
    type: Types.GET_PAYMENT
  }),

  setPayment: data => ({
    type: Types.SET_PAYMENT,
    data
  })
}
