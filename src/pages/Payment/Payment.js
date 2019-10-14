import React from 'react'
import CheckoutPage from 'components/CheckoutPage'
import Input from 'components/Input'
import Col from 'components/Col'
import { format } from 'utils'
import { useForm } from 'utils/form.utils'
import { pay } from 'services/cart.service'
import { to } from 'utils/async.utils'

const Payment = props => {
  const { handleInputChange, inputs } = useForm('payment')

  async function handleSubmit(e) {
    e.preventDefault()
    const [error] = await to(pay())
    if (!error) {
      props.history.push('/confirm')
    }
  }

  return (
    <CheckoutPage
      title='Cartão de Crédito'
      textButton='Finalizar pedido'
      onSubmit={handleSubmit}
    >
      <Col col='16'>
        <Input
          label='Número do cartão:'
          placeholder='____.____.____.____'
          inputMode='numeric'
          onChange={handleInputChange}
          name='cardNumber'
          maxLength={19}
          pattern='.{19,}'
          value={format.cardNumber(inputs.cardNumber)}
          required
        />
      </Col>

      <Col col='16'>
        <Input
          label='Nome do Titular:'
          placeholder='Como no cartão'
          name='name'
          onChange={handleInputChange}
          value={inputs.name}
          required
        />
      </Col>

      <Col col='8'>
        <Input
          label='Validade (mês/ano):'
          placeholder='__/____'
          inputMode='numeric'
          name='expirationDate'
          maxLength={7}
          pattern='.{7,}'
          value={format.cardExpiration(inputs.expirationDate)}
          onChange={handleInputChange}
          required
        />
      </Col>

      <Col col='7' offset='1'>
        <Input
          label='CVV:'
          placeholder='___'
          inputMode='numeric'
          maxLength={3}
          pattern='.{3,}'
          name='cvv'
          onChange={handleInputChange}
          value={inputs.cvv}
          required
        />
      </Col>

    </CheckoutPage>
  )
}

export default Payment
