import TextInput from '../TextInput'

export default function CardPayment({
  state,
  actions,
  errorArray = []
}: PaymentOptionComponentProps) {
  const { handleFormChange } = actions
  //this is a little hacky, but needed to the card to fit when has error in small devices
  const margin = errorArray.length > 3 ? '2' : '4'
  return (
    <div className="p-1">
      <h1 className="text-xl leading 4">Cartão de crédito</h1>
      <div className="mt-3">
        <TextInput
          labelText="Número"
          name="cardNumber"
          hasError={errorArray.includes('cardNumber')}
          placeholder="0000 0000 0000 0000"
          mask="9999 9999 9999 9999"
          value={state.cardNumber}
          onChange={handleFormChange}
          errorMessage="insira um número de cartão válido"
        />
      </div>
      <div className={`mt-${margin}`}>
        <TextInput
          labelText="Nome do titular do cartão"
          name="cardOwner"
          hasError={errorArray.includes('cardOwner')}
          placeholder="Nome impresso no cartão"
          value={state.cardOwner}
          onChange={handleFormChange}
          errorMessage="insira um nome válido"
        />
      </div>
      <div className={`flex gap-3 mt-${margin}`}>
        <TextInput
          labelText="Data de validade"
          name="cardExpirationDate"
          hasError={errorArray.includes('cardExpirationDate')}
          placeholder="MM/AA"
          mask="99/9999"
          value={state.cardExpirationDate}
          onChange={handleFormChange}
          errorMessage="insira uma data válida"
        />
        <TextInput
          labelText="Código CVV"
          name="cardSecurityCode"
          hasError={errorArray.includes('cardSecurityCode')}
          placeholder="000"
          mask="999"
          value={state.cardSecurityCode}
          onChange={handleFormChange}
          errorMessage="insira um CVV válido"
        />
      </div>
    </div>
  )
}
