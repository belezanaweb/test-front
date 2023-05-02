import CardPayment from '../../components/CardPayment'
import { ActionKind, updateCardForm } from './actions'
const obligatoryFields = ['cardNumber', 'cardOwner', 'cardExpirationDate', 'cardSecurityCode']

const validations: Record<string, (s: string) => boolean> = {
  cardNumber: (s: string) => false,
  cardOwner: (s: string) => !/^([A-zÀ-ú]|-|\s)+$/.test(s) || s.length > 50,
  cardExpirationDate: (s: string) => {
    const currentYear = new Date().getFullYear
    const [month, year] = s.split('/')
    return Number(month) < 1 || Number(month) > 12 || Number(year) < Number(currentYear)
  },
  cardSecurityCode: (s: string) => false
}
// we can add new payment Options here
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
        if ((obligatoryFields.includes(key) && state[key] === '') || validations[key](state[key])) {
          stack.push(key)
        }

        return stack
      }, [])
      if (errors.length > 0) {
        return errors
      }
      return false
    },
    initialState: {
      cardNumber: '',
      cardOwner: '',
      cardExpirationDate: '',
      cardSecurityCode: ''
    }
  }
}

export const formInitialState: PaymentState = {
  selectedPayment: 'card',
  options: {
    //other payment forms will have separated objects here
    card: paymentOptions['card'].initialState
  },
  errorArray: []
}
//this reducer became too complex, refactor it in the future
export default function formReducer(state = formInitialState, action: FormAction) {
  const { type, payload } = action
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
