import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'

import ProductPrice from '../components/molecules/ProductPrice'

import Navbar from '../components/organisms/Navbar'
import CreditCard from '../components/organisms/CreditCard'
import { useCheckout } from '../providers/checkout'
import formValidation from '../utils/formValidations'
import { FormProps } from '../types/FormTypes'

function Payment() {
  const navigate = useNavigate()
  const {
    paymentValid,
    creditCard,
    setCreditCard,
    name,
    setName,
    date,
    setDate,
    cvv,
    setCvv
  } = useCheckout()

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
          return errors
        }}
        onSubmit={(values) => {
          console.log(values)
          if (paymentValid) {
            navigate('/confirmacao')
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <>
              {console.log(errors)}

              <CreditCard />
              <ProductPrice />
              <Button type="submit" active={paymentValid}>
                Finalizar pedido
              </Button>
            </>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Payment
