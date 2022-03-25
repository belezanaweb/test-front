import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import PurchaseData from '../../components/PurchaseData/PurchaseData'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import CartContext from '../../context/CartContext'
import Display from '../../components/Display/Display'
import 'react-credit-cards/es/styles-compiled.css'
import Title from '../../components/Title/Title'
import { useNavigate } from 'react-router-dom'
import * as S from './Payment.styled'
import Card from 'react-credit-cards'
import schema from './schema'
import './Payment.css'

const Payment = () => {
  const { setPaymentData } = useContext(CartContext)

  const navigate = useNavigate()

  function onSubmit(values, actions) {
    navigate('/sucess')
  }

  return (
    <S.PaymentBackgroud>
      <Header page={1} />
      <S.PaymentDiv>
        <Title text="CARTÃO DE CREDITO" />
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          validateOnMount
          initialValues={{
            name: '',
            number: '',
            expiry: '',
            cvv: ''
          }}
          render={({ values, errors, touched, isValid }) => (
            <Form>
              <Card
                number={values.number}
                name={values.name}
                expiry={values.expiry}
                cvc={values.cvv}
                focused={values.focus}
              />
              <Display
                content={
                  <>
                    <div>
                      <label className="input-title">Number</label>
                      <Field className="input-display" name="number" type="text" />
                      <ErrorMessage name="number">
                        {(msg) => (
                          <div style={{ color: 'red', height: 18, marginLeft: 14, fontSize: 14 }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="input-title">name</label>
                      <Field className="input-display" name="name" type="text" />
                      <ErrorMessage name="name">
                        {(msg) => (
                          <div style={{ color: 'red', height: 18, marginLeft: 14, fontSize: 14 }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="input-title">Expiry</label>
                      <Field className="input-display" name="expiry" type="text" />
                      <ErrorMessage name="expiry">
                        {(msg) => (
                          <div style={{ color: 'red', height: 18, marginLeft: 14, fontSize: 14 }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="input-title">CVV</label>
                      <Field className="input-display" name="cvv" type="text" />
                      <ErrorMessage name="cvv">
                        {(msg) => (
                          <div
                            style={{
                              color: 'red',
                              height: 18,
                              marginLeft: 14,
                              fontSize: 14,
                              fontFamily: 'Helvetica Neue'
                            }}
                          >
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </>
                }
              />
              <PurchaseData />
              <Button
                text="FINALIZAR COMPRA"
                type="submit"
                disabled={!isValid}
                onClick={() => setPaymentData(values)}
              />
            </Form>
          )}
        />
      </S.PaymentDiv>
    </S.PaymentBackgroud>
  )
}

export default Payment
