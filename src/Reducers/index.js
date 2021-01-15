import { combineReducers } from 'redux'
import Reducer from './Products/index'
import FormReducer from './Form/index'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
  Products: Reducer,
  toastr: toastrReducer,
  FormReducer
})
