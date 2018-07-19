import { combineReducers } from 'redux';
import fetchedData from './reducer_fetchData';

const rootReducer = combineReducers({
    fetchedData
});

export default rootReducer;