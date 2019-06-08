const INITIAL_STATE = {
  loading: true,
  page: 'Cart'
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
