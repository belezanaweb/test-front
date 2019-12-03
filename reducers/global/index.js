import { combineReducers } from 'redux';
export const path = (state = '', { type, payload }) => {
	switch (type) {
		case 'PATH_SET':
			return payload;

		default:
			return state;
	}
};
export const payInfo = (state = null, { type, payload }) => {
	switch (type) {
		case 'PAY_SET':
			return payload;

		default:
			return state;
	}
};

export default combineReducers({ path, payInfo });
