import { combineReducers } from 'redux';

export const products = (state = null, { type, payload }) => {
	switch (type) {
		case 'PRODUCTS_SET':
			return payload;

		default:
			return state;
	}
};

export const isLoading = (state = true, { type }) => {
	switch (type) {
		case 'PRODUCTS_LOADING':
			return true;

		case 'PRODUCTS_SET':
		case 'PRODUCTS_LOADING_ERROR':
			return false;

		default:
			return state;
	}
};

export const isError = (state = false, { type }) => {
	switch (type) {
		case 'PRODUCTS_LOADING_ERROR':
			return true;

		default:
			return state;
	}
};

export default combineReducers({ products, isLoading, isError });
