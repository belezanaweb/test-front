import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { stepReducer } from './ducks/steps'
import { orderReducer } from './ducks/order'
import { loadingReducer } from './ducks/loading'

export const rootReducer = combineReducers({
  stepReducer,
  orderReducer,
  loadingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

export type RootState = ReturnType<typeof rootReducer>
