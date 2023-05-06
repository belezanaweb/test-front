import {
  CreditCardCvvTextField,
  CreditCardDueDateTextField,
  CreditCardTextField,
  TextField
} from 'ui'
import { Card } from '../card'

export function PaymentTab() {
  return (
    <Card className="gap-8 px-5 py-5">
      <h1 className="text-xl">Cartão de crédito</h1>
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
    </Card>
  )
}
