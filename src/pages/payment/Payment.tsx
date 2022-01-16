import { Form, Formik, FormikValues } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import Button from '../../components/elements/button/Button'
import Layout from '../../components/layouts/checkout/Checkout'
import CreditCardForm from '../../components/modules/creditCardForm/CreditCardForm'
import PurchaseSummary from '../../components/modules/purchaseSummary/PurchaseSummary'

import { PAYMENT_SUCCESS_PATH } from '../../constants/paths'

import { PurchaseContext } from '../../contexts/PurchaseContext'

import { StyledPaymentPage } from './Payment.styled'

function PaymentPage() {
  const navigate = useNavigate()

  const { setPaymentInfo } = useContext(PurchaseContext)

  const initialValues = {
    number: '',
    name: '',
    expirationDate: '',
    cvv: ''
  }

  const validationSchema = Yup.object().shape({
    number: Yup.string().required('Campo obrigatório'),
    name: Yup.string().required('Campo obrigatório'),
    expirationDate: Yup.string().required('Campo obrigatório'),
    cvv: Yup.string().required('Campo obrigatório')
  })

  function handleSubmit(values: FormikValues) {
    setPaymentInfo({
      creditCardNumber: values.number,
      creditCardName: values.name,
      creditCardExpirationDate: values.expirationDate,
      creditCardCVV: values.cvv
    })

    navigate(PAYMENT_SUCCESS_PATH)
  }

  return (
    <Layout title="Cartão de crédito">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, initialValues, values }) => (
          <Form>
            <StyledPaymentPage>
              <CreditCardForm />
              <PurchaseSummary />
              <Button
                type="submit"
                disabled={JSON.stringify(values) === JSON.stringify(initialValues) || !isValid}
              >
                Finalizar o pedido
              </Button>
            </StyledPaymentPage>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default PaymentPage
