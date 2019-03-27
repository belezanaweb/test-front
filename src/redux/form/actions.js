export const SET_NUMERO = 'SET_NUMERO';
export const SET_TITULAR = 'SET_TITULAR';
export const SET_VALIDADE = 'SET_VALIDADE';
export const SET_CVV = 'SET_CVV';

export async function setNumero(number) {
  return dispatch => {
    dispatch({ type: SET_NUMERO, payload: number })
  }
}

export async function setTitular(titular) {
  return dispatch => {
    dispatch({ type: SET_TITULAR, payload: titular })
  }
}

export async function setValidade(validade) {
  return dispatch => {
    dispatch({ type: SET_VALIDADE, payload: validade })
  }
}

export async function setCvv(cvv) {
  return dispatch => {
    dispatch({ type: SET_CVV, payload: cvv })
  }
}

