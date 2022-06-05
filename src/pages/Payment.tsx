import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'
import { Content } from '../components/atoms/Container/styles'

import ProductPrice from '../components/molecules/ProductPrice'
import { FormContent } from '../components/molecules/FormCreditCard/styles'

import Navbar from '../components/organisms/Navbar'
import CreditCard from '../components/organisms/CreditCard'
import { useCheckout } from '../providers/checkout'
import formValidation from '../utils/formValidations'

function Payment() {
  const navigate = useNavigate()
  const { creditCard, name, date, cvv, setError, setPaymentValid } = useCheckout()

  return (
    <Container>
      <Navbar />
      <Content>
        <Formik
          initialValues={{
            idValid: false,
            creditCard: '',
            cvv: '',
            name: '',
            date: ''
          }}
          validate={() => {
            const errors = formValidation({
              creditCard,
              name,
              date,
              cvv
            })
            setError(errors)
            if (
              errors.creditCard === '' &&
              errors.name === '' &&
              errors.date === '' &&
              errors.cvv === ''
            ) {
              navigate('/confirmacao')
            } else {
              setPaymentValid(false)
            }
            return errors
          }}
          onSubmit={() => {}}
        >
          {() => (
            <FormContent>
              <CreditCard />
              <ProductPrice />
              <Button type="submit">Finalizar pedido</Button>
            </FormContent>
          )}
        </Formik>
      </Content>
    </Container>
  )
}

export default Payment
