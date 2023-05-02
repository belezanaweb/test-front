import { useMutation } from '@tanstack/react-query'
import sendPaymentData from '../services/sendPaymentData'
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import formReducer, { formInitialState, paymentOptions } from '../reducers/form'
import { handleFormError } from '../reducers/form/actions'

export default function usePaymentForm() {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(formReducer, formInitialState)
  const mutation = useMutation({
    mutationFn: (state: CardForm) => {
      return sendPaymentData(state)
    }
  })

  const sendForm = async () => {
    const formState = state.options[state.selectedPayment]
    const selectedPayment = paymentOptions[state.selectedPayment]
    const errors = selectedPayment.validate(formState)
    if (errors) {
      dispatch(handleFormError(errors))
      return errors
    }
    try {
      await mutation.mutateAsync(formState)
    } catch (error) {
      console.error(mutation)
    }

    navigate('/pedido', {
      state: {
        ...formState,
        error: {
          hasError: mutation.isError,
          message: mutation.failureReason
        }
      }
    })
  }

  return {
    state,
    sendForm,
    dispatch,
    isSending: mutation.isLoading
  }
}
