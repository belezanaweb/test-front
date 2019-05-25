import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';

const composeEnhancers = composeWithDevTools({});

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
  );
};