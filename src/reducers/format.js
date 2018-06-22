const format = (state = {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL'
}, action) => {
  switch (action.type) {
    case 'SET_FORMAT':
      return {
        minimumFractionDigits: action.mfd,
        style: action.style,
        currency: action.currency
      }
    default:
      return state
  }
}

export default format;
