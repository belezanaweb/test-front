const setPayment = (payment) => ({
  type: 'SET_PAYMENT',
  payload: {
    payment,
  },
});

export default setPayment;
