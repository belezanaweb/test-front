import { Card } from 'components/Card'
import * as S from './styles'
import { Input } from 'components/Input'

export const CreditCardForm = () => {
  return (
    <Card title="Cartão de crédito">
      <S.Container>
        <Input
          label="Número"
          mask="9999 9999 9999 9999"
          placeholder="0000 0000 0000 0000"
          name="cardNumber"
          error="insira um número de cartão válido"
        />
        <Input
          label="Nome do titular do cartão"
          placeholder="Nome impresso no cartão"
          name="cardName"
          error="insira um nome válido"
        />

        <S.InputGroup>
          <Input
            label="Data de validade"
            mask="99/99"
            placeholder="MM/AA"
            name="cardExpiration"
            error="insira uma data válida"
          />
          <Input
            label="Código CVV"
            mask="999"
            placeholder="000"
            name="cardCvv"
            error="insira um cvv válido"
          />
        </S.InputGroup>
      </S.Container>
    </Card>
  )
}
