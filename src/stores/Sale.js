import { createStore } from 'redux'

const saleReduce = (state = { sale: null }, action) => {
  switch (action.type) {
    case 'sale/fill':
      return { sale: action.sale }
    default:
      return state.sale
  }
}

const saleStore = createStore(saleReduce)

export default saleStore
