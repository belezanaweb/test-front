const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default rootReducer
