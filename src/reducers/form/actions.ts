export enum ActionKind {
  UPDATE_CARD_FORM = 'UPDATE_CARD_FORM',
  CHANGE_SELECTED_OPTION = 'CHANGE_SELECTED_OPTION',
  FORM_ERROR = "FORM_ERROR"
}

export const updateCardForm = (name: string, value: string) => ({
  type: ActionKind.UPDATE_CARD_FORM,
  payload: { name, value }
})

export const handleChangeSelectedOption = (selectedPayment: string) => ({
  type: ActionKind.CHANGE_SELECTED_OPTION,
  payload: { name: '', value: selectedPayment }
})

export const handleFormError = (errors: string[]) => ({
  type: ActionKind.FORM_ERROR,
  //JSON.stringify is need for the array to be serializible
  payload: { name: '', value: JSON.stringify(errors) }
})
