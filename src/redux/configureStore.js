import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import reducers from "./reducers";

export default function configureStore() {
    return createStore(reducers, {}, applyMiddleware(thunkMiddleware, promiseMiddleware))
}
