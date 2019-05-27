import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import * as actionCreators from '../actions';

const configureStore = (preloadedState?: any) => {

  const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        createLogger()
      ),
    )
  )

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    })
  }

  return store;
}

export default configureStore;
