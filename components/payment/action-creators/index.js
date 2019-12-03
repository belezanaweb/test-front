export const setPayment = payload => ({
	type: 'PAY_SET',
	payload
});

export const fetchPayment = userInfo => dispatch => {
	dispatch(setPayment(userInfo));
};
