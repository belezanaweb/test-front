export const initialStateCard = {
    number: '',
    name: '',
    validity: '',
    cvv: '',
    valid: false
};

export const cardReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER":
            return { ...state, number: action.value };
        case "SET_NAME":
            return { ...state, name: action.value };
        case "SET_VALIDITY":
            return { ...state, validity: action.value };
        case "SET_CVV":
            return { ...state, cvv: action.value };
        case "SET_VALID":
            return { ...state, valid: action.value };
        default:
            return state;
    };
};