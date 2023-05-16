import { Button, InputField } from '@test-front/common-ui'

import Card from '@test-front/common-ui/src/components/card/Card'

export default function App() {
  return (
    <div className="h-screen p-5">
      <Button>Prosseguir para o pagamento</Button>
      <br />
      <br />
      <Card>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
      </Card>
      <br />
      <br />
      <InputField
        label="Credit card number"
        hasError
        errorText="invalid number"
        placeholder="0000 0000 0000"
        mask="9999 9999 9999 9999"
      />
      <br />
      <InputField label="Card holder" placeholder="Type a name" />

      <br />
      <InputField label="Valid date" placeholder="MM/AA" mask="99/99" />

      <br />
      <InputField label="CVV" placeholder="000" mask="999" />

      <br />
    </div>
  )
}
