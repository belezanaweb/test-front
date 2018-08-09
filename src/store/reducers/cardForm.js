const INITIAL_STATE = {
  validate: false
};

export default function cardForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "VALIDATE_FORM":
      return { ...state, validate: true };
    case "INVALIDATE_FORM":
      return { ...state, validate: false };
    default:
      return state;
  }
}
