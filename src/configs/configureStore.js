import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

export default preloadedState =>
  createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(reduxThunk))
  );
