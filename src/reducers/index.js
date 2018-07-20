import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchedData from './reducer_fetchData';

const rootReducer = combineReducers({
    fetchedData,
    form: formReducer
});

export default rootReducer;