import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware, { END, Task } from 'redux-saga';

import rootReducer, { AppState } from './reducers';
import rootSaga from './sagas';

interface AppContext {
  isServer?: boolean;
}

export interface ReduxStore extends Store<AppState> {
  run: Task;
  close: () => END;
}

const prod = process.env.NODE_ENV === 'production';

function configureStore(context: AppContext, appState?: AppState): ReduxStore {
  const devtools = !context.isServer && window.__REDUX_DEVTOOLS_EXTENSION__;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(applyMiddleware(sagaMiddleware), !prod && devtools ? devtools() : (f: unknown) => f);

  const store = createStore(rootReducer, appState, enhancer) as ReduxStore;

  store.run = sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
}

export { AppState } from './reducers';
export default configureStore;
