import React, { useEffect, useRef } from 'react'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from '@unform/web'
import history from '../../services/history'
import getValidationErrors from '../../utils/getValidationErrors'
import { Button } from '../../components/Button'
import { BorderContainer } from '../../components/BorderContainer'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { ProductHeader } from '../../components/ProductHeader'
import { Creators as CartActions } from '../../store/ducks/cart'

import { Container, ContainerWrapper, InputWrapper } from './styles'
import { Input } from '../../components/Input'
import { GridContainer } from '../../components/GridContainer'

export const Payment = () => {
  const { cartById } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const formRef = useRef(null)
  useEffect(() => {
    if (Object.values(cartById).length === 0) history.push('/cart')
  }, [cartById])

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }

  const handleSubmit = async (data) => {
    try {
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        creditCard: Yup.string()
          .required('Cartão obrigatório.')
          .min(16, 'Cartão obrigatório.')
          .max(16, 'Cartão inválido.'),
        ownerName: Yup.string().required('Nome obrigatório.'),
        valid: Yup.string().required('Data obrigatório.'),
        cvv: Yup.string()
          .required('CVV obrigatório.')
          .min(3, 'CVV obrigatório.')
          .max(3, 'CVV inválido.')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      dispatch(CartActions.saveUser(data))
      history.push('/checkoutconfirm')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)

        formRef.current.setErrors(errors)
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Text type="cardTextLabel">CARTÃO DE CRÉDITO</Text>
        <Card margin="2%" padding="3%">
          <Text type="inputLabel">Número do Cartão: </Text>
          <Input name="creditCard" type="number" placeholder="_____.____.____.____" />

          <Text type="inputLabel">Nome do Titular: </Text>
          <Input name="ownerName" type="text" placeholder="Como no cartão" />

          <GridContainer columns="60% 40%">
            <InputWrapper>
              <Text type="inputLabel">Validade (mês/ano)</Text>
              <Input name="valid" type="date" placeholder="__/____" />
            </InputWrapper>
            <InputWrapper>
              <Text type="inputLabel">CVV</Text>
              <Input name="cvv" type="number" placeholder="___" width="100%" />
            </InputWrapper>
          </GridContainer>
        </Card>
        <ContainerWrapper>
          <BorderContainer color="#CCC">
            <ProductHeader>
              <Text type="cartPriceValue">PRODUTOS</Text>
              <Text type="cartPriceValue">
                R$ {cartById.subTotal && cartById.subTotal.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>

            <ProductHeader>
              <Text type="cartPriceValue">FRETE</Text>
              <Text type="cartPriceValue">
                R${' '}
                {cartById.shippingTotal &&
                  cartById.shippingTotal.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>

            <ProductHeader>
              <Text type="cartPriceDiscount">DESCONTO</Text>
              <Text type="cartPriceDiscount">
                {' '}
                - R${' '}
                {cartById.discount && cartById.discount.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>

            <ProductHeader>
              <Text type="cartPriceTotal">TOTAL</Text>
              <Text type="cartPriceTotal">
                R$ {cartById.total && cartById.total.toFixed(2).toString().replace('.', ',')}
              </Text>
            </ProductHeader>
          </BorderContainer>
          <Button type="submit" value="FINALIZAR O PEDIDO" />
        </ContainerWrapper>
      </Form>
    </Container>
  )
}
