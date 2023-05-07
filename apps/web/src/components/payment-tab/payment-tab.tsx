import {
  CreditCardCvvTextField,
  CreditCardDueDateTextField,
  CreditCardTextField,
  TextField
} from 'ui'
import { Card } from '../card'
import { SyntheticEvent } from 'react'
import { useTabsContext } from 'ui/src/tabs/tabs'

export const PAYMENT_TAB_FORM_ID = 'paymentTabForm'

export function PaymentTab() {
  const tabs = useTabsContext()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    tabs.setTabKey('confirmation')
  }

  return (
    <Card className="gap-8 px-5 py-5">
      <h1 className="text-xl">Cartão de crédito</h1>
      <form id={PAYMENT_TAB_FORM_ID} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <CreditCardTextField
            id="cardNumber"
            name="cardNumber"
            label="Número"
            onChange={(e) => console.log(e)}
          />
          <TextField
            id="name"
            name="name"
            label="Nome do titular do cartão"
            onChange={(e) => console.log(e.target.value)}
          />
          <div className="flex gap-5">
            <CreditCardDueDateTextField
              id="dueDate"
              name="dueDate"
              label="Data de validade"
              onChange={(e) => console.log(e)}
            />
            <CreditCardCvvTextField
              id="cvv"
              name="cvv"
              label="Código CVV"
              onChange={(e) => console.log(e)}
            />
          </div>
        </div>
      </form>
    </Card>
  )
}
