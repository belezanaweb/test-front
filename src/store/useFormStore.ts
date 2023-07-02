import { create } from 'zustand'
import { FormProps } from '../components/PaymentForm'

interface FormState {
  form: FormProps;
  addForm: (form: FormProps) => void;
  clearForm: () => void;
}

const useFormStore =
  create <
  FormState >
  ((set) => ({
    form: { cardNumber: '', cardOwner: '', expirationDate: '', securityNumber: '' },
    addForm: (form) => {
      set(() => ({ form: form }))
    },
    clearForm: () => {
      set(() => ({
        form: { cardNumber: '', cardOwner: '', expirationDate: '', securityNumber: '' }
      }))
    }
  }))

export default useFormStore
