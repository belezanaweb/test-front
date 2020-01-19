
import * as LoadingActions from '../store/loading/actions';
import * as LoadingActionTypes from '../store/loading/actionTypes';


const loadingMiddleware = store => next => (action) => {
  if (action.loading !== undefined && action.type !== LoadingActionTypes.SET_LOADING) {
    store.dispatch(LoadingActions.setLoading(action.loading));
  }

  next(action);
};


export default loadingMiddleware;
