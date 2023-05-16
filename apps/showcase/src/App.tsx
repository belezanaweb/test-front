import { Button, Card, InputField } from '@test-front/common-ui'

export default function App() {
  return (
    <div className="flex h-screen flex-col p-5 gap-4">
      <h1 className='font-bold text-lg mb-5'>Showcase Components</h1>

      <Button>Prosseguir para o pagamento</Button>

      <Card>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
        <p>This is a simple card</p>
      </Card>

      <InputField
        label="Credit card number"
        hasError
        errorText="invalid number"
        placeholder="0000 0000 0000"
        mask="9999 9999 9999 9999"
      />

      <InputField label="Card holder" placeholder="Type a name" />

      <InputField label="Valid date" placeholder="MM/AA" mask="99/99" />

      <InputField label="CVV" placeholder="000" mask="999" />
    </div>
  )
}
