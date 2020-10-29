import { createStore, combineReducers } from 'redux'
import bagReducer from './reducers/bag'
import breadcrumbReducer from './reducers/breadcrumb'
import creditCardReducer from './reducers/payment'

const store = createStore(
  combineReducers({
    bag: bagReducer,
    breadcrumb: breadcrumbReducer,
    creditCard: creditCardReducer
  })
)

export default store
