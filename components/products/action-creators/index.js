import axios from 'axios';

const PRODUCTS_URI = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07';

export const setProducts = payload => ({
	type: 'PRODUCTS_SET',
	payload
});

export const loadingProducts = () => ({
	type: 'PRODUCTS_LOADING'
});
export const loadingProductsError = payload => ({
	type: 'PRODUCTS_LOADING_ERROR',
	payload
});

export const fetchProducts = () => async dispatch => {
	dispatch(loadingProducts());

	const request = axios({
		method: 'GET',
		url: PRODUCTS_URI,
		headers: []
	});

	return request.then(
		response => dispatch(setProducts(response.data)),
		err => dispatch(loadingProductsError(err))
	);
};

export const setPath = payload => ({
	type: 'PATH_SET',
	payload
});

export const fetchPath = path => dispatch => {
	dispatch(setPath(path));
};
