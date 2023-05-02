//this component only exists in case, in the future, we need to add new payment
//options so we have only one point of change, as the O in SOLID
import { Dispatch, useState } from 'react'
import { paymentOptions } from '../reducers/form'
import { handleChangeSelectedOption } from '../reducers/form/actions'

interface PaymentOptionsProps {
  formState: PaymentState;
  dispatch: Dispatch<FormAction>;
}

export default function PaymentOptions({ formState, dispatch }: PaymentOptionsProps) {
  const optionKeys = Object.keys(paymentOptions)
  const { Component, actions } = paymentOptions[formState.selectedPayment]

  const actionsWithDispatch = Object.keys(actions).reduce((stack: Record<string, any>, key) => {
    stack[key] = (...e: any[]) => dispatch(actions[key](...e))
    return stack
  }, {})

  console.log({ formState })

  return (
    <>
      <Component
        errorArray={formState.errorArray}
        state={formState.options[formState.selectedPayment]}
        actions={actionsWithDispatch}
      />
      {optionKeys.length > 1 && (
        <div>
          <h3 className="text-lg">Selecione a forma de pagamento</h3>
          <ul>
            {optionKeys.map((key: string) => {
              const { name } = paymentOptions[key]
              return (
                <li role="button" onClick={() => handleChangeSelectedOption(key)}>
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
