import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'

import ProductPrice from '../components/molecules/ProductPrice'

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
          <Form>
            <>
              <CreditCard />
              <ProductPrice />
              <Button type="submit">Finalizar pedido</Button>
            </>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Payment
