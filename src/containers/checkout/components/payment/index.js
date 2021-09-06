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
          masks={['999.999.999.999']}
          maxLength={15}
        />
        <Input form={form} name="name" label="Nome do Titular:" placeholder="Como no cartão" />
        <div className="inline">
          <Input
            form={form}
            name="validity"
            label="Validade (mês/ano):"
            placeholder="__/____"
            masks={['99/9999']}
          />
          <Input form={form} name="cvv" label="CVV:" placeholder="___" masks={['999']} />
        </div>
      </Content>
    </Container>
  )
}

export default Payment
