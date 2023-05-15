import Card from '@test-front/common-ui/src/components/card/Card'
import InputField from '@test-front/common-ui/src/components/input/Input'

export default function PaymentForm() {
  return (
    <Card className="gap-8">
      <h1 className="mb-4 text-xl">Cartão de crédito</h1>
      <form>
        <div className="flex flex-col gap-5">
          <InputField
            id="cardNumber"
            placeholder="0000 0000 0000"
            mask="9999 9999 9999 9999"
            label="Número"
          />

          <InputField id="name" label="Nome do titular do cartão" />

          <div className="flex gap-5">
            <InputField id="dueDate" label="Data de validade" mask="99/99" />
            <InputField id="cvv" label="Código CVV" mask="999" />
          </div>
        </div>
      </form>
    </Card>
  )
}
