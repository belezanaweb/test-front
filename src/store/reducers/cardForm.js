const INITIAL_STATE = {
  validate: false,
  data: {
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
  }
};

export default function cardForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "VALIDATE_FORM":
      return { 
        ...state, 
        validate: true,
        data: action.payload.data
      };
    case "INVALIDATE_FORM":
      return { ...state, validate: false };
    default:
      return state;
  }
}
