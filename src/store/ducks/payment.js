export const Types = {
  SET_PAYMENT: 'SET_PAYMENT'
}

const INITIAL_STATE = {
  data: {},
}

export default function payment(state = INITIAL_STATE, action){
  switch (action.type) {
    case Types.SET_PAYMENT:
      return {...state, data: action.data}
    default:
      return state;
  }
}

export const Creators = {
  setPayment: data => ({
    type: Types.SET_PAYMENT,
    data
  })
}
