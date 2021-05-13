import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { setPaymentInfos } from '../../actions/paymentActions'
import { Button, Input, TotalInfos, Typography } from '../../components'
import { valCreditCard, valCvv, valValidateDate, valCartHolder } from '../../utils/validations'

import {
  Container,
  ContainerTitle,
  Title,
  ContainerInfos,
  Infos,
  CardForm,
  CardTotal,
  ContainerButton,
  CustomButtom,
  ContainerInput,
  SideSideInput
} from './styles.css'

const Payment = () => {
  const { infos } = useSelector((state) => state.cart)
  const history = useHistory()
  const dispatch = useDispatch()
  const formRef = useRef()

  const schema = Yup.object().shape({
    creditCard: valCreditCard,
    name: valCartHolder,
    date: valValidateDate,
    code: valCvv
  })

  const handleFormSubmit = async (data) => {
    try {
      formRef.current.setErrors({})
      await schema.validate(data, {
        abortEarly: false
      })
      dispatch(setPaymentInfos(data))
      history.push('/success')
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
      }
    }
  }

  return (
    <Container data-testid="payment-container">
      <Form ref={formRef} onSubmit={handleFormSubmit} data-testid="payment-form">
        <ContainerTitle>
          <Title>
            <Typography>Cartão de Crédito</Typography>
          </Title>
        </ContainerTitle>
        <ContainerInfos>
          <Infos>
            <CardForm>
              <ContainerInput>
                <Input
                  name="creditCard"
                  label="Número do cartão"
                  mask="9999.9999.9999.9999"
                  maskPlaceholder="____.____.____.____"
                />
              </ContainerInput>
              <ContainerInput>
                <Input name="name" label="Nome do titular" placeholder="Como no cartão" />
              </ContainerInput>
              <ContainerInput>
                <SideSideInput>
                  <Input
                    name="date"
                    label="Validade (mês/ano)"
                    mask="99/9999"
                    maskPlaceholder="__/____"
                  />
                  <Input name="code" label="CVV" mask="999" maskPlaceholder="___" />
                </SideSideInput>
              </ContainerInput>
            </CardForm>
            <CardTotal>
              <TotalInfos
                discount={infos.discount}
                shippingTotal={infos.shippingTotal}
                subTotal={infos.subTotal}
                total={infos.total}
              />
            </CardTotal>
          </Infos>
        </ContainerInfos>
        <ContainerButton>
          <CustomButtom>
            <Button label="Finalizar o pedido" type="submit" />
          </CustomButtom>
        </ContainerButton>
      </Form>
    </Container>
  )
}

export default Payment
