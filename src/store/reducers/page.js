const INITIAL_STATE = {
  loading: true,
  page: 'Cart'
  // page: 'Payment'
  // page: 'Conclusion'
}

function page(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}

export default page
