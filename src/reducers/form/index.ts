import CardPayment from '../../components/CardPayment'
import { ActionKind, updateCardForm } from './actions'
const obligatoryFields = ['cardNumber', 'cardOwner', 'cardExpirationDate', 'cardSecurityCode']
export const paymentOptions: OptionsDict = {
  card: {
    name: 'Cartão de Crédito',
    Component: CardPayment,
    actions: {
      handleFormChange: updateCardForm
    },
    obligatoryFields,
    validate: (state: FormState) => {
      const errors = Object.keys(state).reduce((stack: string[], key: string) => {
        if (obligatoryFields.includes(key) && state[key] === '') {
          stack.push(key)
        }
        return stack
      }, [])
      console.log(errors)
      if (errors.length > 0) {
        return errors
      }
      return false
    }
  }
}

export const formInitialState: PaymentState = {
  selectedPayment: 'card',
  options: {
    //other payment forms will have separated objects here
    card: {
      cardNumber: '',
      cardOwner: '',
      cardExpirationDate: '',
      cardSecurityCode: ''
    }
  },
  errorArray: []
}
//this reducer became too complex, refactor it in the future
export default function formReducer(state = formInitialState, action: FormAction) {
  const { type, payload } = action
  console.log({ action })
  switch (type) {
    case ActionKind.UPDATE_CARD_FORM:
      return {
        ...state,
        options: {
          ...state.options,
          card: {
            ...state.options.card,
            [payload.name]: payload.value
          }
        },
        errorArray: state.errorArray.filter((e) => e !== payload.name)
      }
    case ActionKind.CHANGE_SELECTED_OPTION:
      return {
        ...state,
        selectedPayment: payload.value
      }

    case ActionKind.FORM_ERROR:
      return {
        ...state,
        errorArray: JSON.parse(payload.value)
      }
    default:
      return state
  }
}
