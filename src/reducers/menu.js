import routes from '../enums/routes';

const initialState = routes.root;

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE': {
      return action.payload.currentPage;
    }

    default:
      return state;
  }
};

export default menu;
