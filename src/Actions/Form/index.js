export const incrementValid = (data, valid) => {
  return {
    type: '@FormReducer/INCREMENT_VALID',
    payload: data,
    valid: valid
  }
}
