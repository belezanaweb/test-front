export const ADD_PAYMENT = 'ADD_PAYMENT'

// criadores de açao síncronos
function addPayment (payment) { 
    return {
        type: ADD_PAYMENT,
        payment,
    }
}

// criadores de açao assíncronos
export function handlePayment(payment) {
    return dispatch => {
        dispatch(addPayment(payment))
    }    
}