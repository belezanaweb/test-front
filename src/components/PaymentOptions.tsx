//this component only exists in case, in the future, we need to add new payment
//options so we have only one point of change, as the O in SOLID
import { paymentOptions } from '../reducers/form'

interface PaymentOptionsProps {
  formState: PaymentState;
  Component: (props: PaymentOptionComponentProps) => JSX.Element;
  actions: ActionDict;
}

export default function PaymentOptions({ formState, Component, actions }: PaymentOptionsProps) {
  const optionKeys = Object.keys(paymentOptions)

  return (
    <>
      <Component
        errorArray={formState.errorArray}
        state={formState.options[formState.selectedPayment]}
        actions={actions}
      />
      {optionKeys.length > 1 && (
        <div>
          <h3 className="text-lg">Selecione a forma de pagamento</h3>
          <ul>
            {optionKeys.map((key: string) => {
              const { name } = paymentOptions[key]
              return (
                <li role="button" onClick={() => actions.handleChangeSelectedOption(key)}>
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
