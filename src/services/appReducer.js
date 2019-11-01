const initialState = {
    user: {
        creditcard: '',
        name: '',
        cvv: '',
        validate: ''
    },
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PRODUCTS':
            return {...state, products: action.payload};
        case 'SET_SUMMARY':
            return {...state, summary: action.payload};
        default:
            return state;
    }
}