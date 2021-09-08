import React from 'react'
import Input from '../../../../components/Input'
import { Container, Content } from './styles'

const Payment = ({ form }) => {
  return (
    <Container>
      <h3>CARTÃO DE CRÉDITO</h3>

      <Content>
        <Input
          form={form}
          name="cardNumber"
          label="Número do cartão:"
          placeholder="____.____.____.____"
          masks={['9999.9999.9999.9999']}
          maxLength={19}
        />
        <Input form={form} name="name" label="Nome do Titular:" placeholder="Como no cartão" />
        <div className="inline">
          <Input
            form={form}
            name="validity"
            label="Validade (mês/ano):"
            placeholder="__/____"
            masks={['99/9999']}
            maxLength={7}
          />
          <Input
            form={form}
            name="cvv"
            label="CVV:"
            placeholder="___"
            masks={['999']}
            maxLength={3}
          />
        </div>
      </Content>
    </Container>
  )
}

export default Payment
