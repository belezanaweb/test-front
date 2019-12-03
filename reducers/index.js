import { combineReducers } from 'redux';
import { reducer as products } from '../components/products';
import { default as global } from './global';

export default combineReducers({ products, global });
