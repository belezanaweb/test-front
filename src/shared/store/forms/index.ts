import { Reducer } from 'redux';
import { Cookies } from 'react-cookie';
import { FormsState, FormsTypes } from './types';

const cookies = new Cookies();

const INITIAL_STATE: FormsState = {
  payment: null,
};

const reducer: Reducer<FormsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormsTypes.SUBMIT_FORM:
      cookies.set('form', JSON.stringify(action.payload.data), { path: '/' });
      return {...state, payment: action.payload.data };
    default:
      return state;
  }
};

  export default reducer;
