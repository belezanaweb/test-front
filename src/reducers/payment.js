const payment = (state = {
  cc: '',
  name: '',
  exp: ''
}, action) => {
  switch (action.type) {
    case 'SET_PAYMENT':
      return {
        cc: action.payload.cc,
        name: action.payload.name,
        exp: action.payload.exp
      }
    default:
      return state
  }
}

export default payment;
