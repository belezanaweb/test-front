export const setPayment = (payment) => {
    return {
        type: "SET_PAYMENT",
        payload: {
            payment
        }
    }
}