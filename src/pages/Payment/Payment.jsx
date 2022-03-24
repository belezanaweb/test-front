import React, { useContext } from 'react'
import * as S from './Payment.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import CartContext from '../../context/CartContext'
// import schema from './schema';
import 'react-credit-cards/es/styles-compiled.css'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { setPaymentData } = useContext(CartContext)

  const navigate = useNavigate()

  function onSubmit(values, actions) {
    console.log('SUBMIT', values)
    navigate('/sucess')
  }

  return (
    <S.PaymentBackgroud>
      <Header page={1} />
      <S.PaymentDiv>
        <Title text="CARTÃO DE CREDITO" />
        <Formik
          // validationSchema={schema}
          onSubmit={onSubmit}
          validateOnMount
          initialValues={{
            name: '',
            number: '',
            expiry: '',
            cvv: ''
          }}
          render={({ values, errors, touched }) => (
            <Form>
              <div>
                <label>Number</label>
                <Field name="number" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label>name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label>Expiry</label>
                <Field name="expiry" type="text" />
                <ErrorMessage name="expiry" />
              </div>
              <div>
                <label>CVV</label>
                <Field name="cvv" type="text" />
                <ErrorMessage name="cvv" />
              </div>
              <button type="submit" onClick={() => setPaymentData(values)}>
                Enviar
              </button>
              console.log(paymentData)
            </Form>
          )}
        />
      </S.PaymentDiv>
    </S.PaymentBackgroud>
  )
}

export default Payment
