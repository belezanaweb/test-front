const item = (state = {name: ''}, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return {
          name: action.item.name,
          id: action.item.id
        }
    default:
      return state
  }
}

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'REMOVE_CART_ITEM':
      const index = state.indexOf(state.find(i => i.id === action.id))
      return [
        ...state.slice(0,index), ...state.slice(index+1)
      ]
    default:
      return state

  }
}

export default cart;
