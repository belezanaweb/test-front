import React, { useRef, useCallback, useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'

import api from '../../Service/api'
import { Container } from './style'
import getValidationErrors from '../../Utils/getValidationErrors'
import InfoPaymentCheckout from '../../Components/InfoPaymentCheckout'
import ButtonCheckout from '../../Components/ButtonCheckout'
import HeaderCheckout from '../../Components/HeaderCheckout'
import Input from '../../Components/Input'

const CheckoutPayment = () => {
  const history = useHistory()

  const [infoPayment, setInfoPayment] = useState({})

  useEffect(async () => {
    const { data } = await api.get('v2/5b15c4923100004a006f3c07')

    const { subTotal, shippingTotal, discount, total } = data

    setInfoPayment({
      subTotal,
      shippingTotal,
      discount,
      total
    })
  }, [infoPayment])

  const formRef = useRef(null)
  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({})

      const schema = Yup.object().shape({
        numberCart: Yup.string('Apenas números são permitidos').required(
          'Numero do cartão é obrigatório'
        ),
        nameCart: Yup.string().required('Nome do titular obrigatório'),
        validateCart: Yup.string().required('Validade obrigatório'),
        cvvCart: Yup.string().required('CVV obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      history.push({
        pathname: '/checkout/done',
        state: { data }
      })
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current.setErrors(errors)
    }
  }, [])

  return (
    <>
      <HeaderCheckout />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Cartão de crédito</h2>
          <div className="info-cart">
            <label htmlFor="numberCart">Número do cartão:</label>
            <Input
              className="input-number-cart"
              name="numberCart"
              type="text"
              placeholder="____.____.____.____"
            />
            <label htmlFor="nameCart">Nome do titular:</label>
            <Input
              className="input-name-cart"
              name="nameCart"
              type="text"
              placeholder="Como no cartão"
            />

            <div className="validate-cvv">
              <div>
                <label htmlFor="validateCart">Validade (mês/ano)</label>
                <Input
                  className="input-validate-cart"
                  name="validateCart"
                  type="text"
                  placeholder="__/____"
                />
              </div>
              <div>
                <label htmlFor="cvvCart">CVV</label>
                <Input className="input-cvv-cart" name="cvvCart" type="text" placeholder="___" />
              </div>
            </div>
          </div>
          <InfoPaymentCheckout infoPayment={infoPayment} />
          <ButtonCheckout type="submit">Finalizar pedido</ButtonCheckout>
        </Form>
      </Container>
    </>
  )
}

export default CheckoutPayment
