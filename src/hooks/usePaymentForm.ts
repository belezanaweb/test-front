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
  const selectedPayment = paymentOptions[state.selectedPayment]

  //this function has too many responsibilities
  const sendForm = async () => {
    const formState = state.options[state.selectedPayment]
    const errors = selectedPayment.validate(formState)
    if (errors) {
      dispatch(handleFormError(errors))
      return errors
    }
    try {
      const state = await mutation.mutateAsync(formState)
      navigate('/finaliza-pedido', {
        state: {
          ...state
        }
      })
    } catch (error) {
      console.error(mutation)
    }
  }

  const { Component, actions } = selectedPayment

  const actionsWithDispatch = Object.keys(actions).reduce((stack: Record<string, any>, key) => {
    stack[key] = (...e: any[]) => dispatch(actions[key](...e))
    return stack
  }, {})

  return {
    state,
    sendForm,
    dispatch,
    isSending: mutation.isLoading,
    Component,
    actions: actionsWithDispatch
  }
}
