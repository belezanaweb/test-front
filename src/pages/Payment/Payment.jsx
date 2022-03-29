import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import PurchaseData from '../../components/PurchaseData/PurchaseData'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import CartContext from '../../context/CartContext'
import 'react-credit-cards/es/styles-compiled.css'
import Title from '../../components/Title/Title'
import { useNavigate } from 'react-router-dom'
import * as S from './Payment.styled'
import Card from 'react-credit-cards'
import schema from '../../services/schema'

const Payment = () => {
  const { setPaymentData } = useContext(CartContext)

  const navigate = useNavigate()

  function onSubmit() {
    navigate('/sucess')
  }

  return (
    <S.PaymentBackgroud>
      <Header page={1} />
      <S.PaymentDiv>
        <Title color={999} size={14} text="CARTÃO DE CREDITO" />
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          t
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
              <S.Display>
                <>
                  <S.Input width={331}>
                    <S.InputTitle margin={8}>Número do cartão:</S.InputTitle>
                    <Field
                      placeholder="____.____.____.____"
                      className={`input-display ${
                        touched.number && errors.number && 'input-display-error'
                      }`}
                      name="number"
                      type="input"
                    />
                    {touched.number && errors.number && (
                      <div className="error">{errors.number}</div>
                    )}
                  </S.Input>
                  <S.Input width={331}>
                    <S.InputTitle margin={8}>Nome do Titular:</S.InputTitle>
                    <Field
                      placeholder="Como no cartão"
                      className={`input-display ${
                        touched.name && errors.name && 'input-display-error'
                      }`}
                      name="name"
                      type="text"
                    />
                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
                  </S.Input>
                  <S.WrapperDiv>
                    <S.Input width={180}>
                      <S.InputTitle margin={10}>Validade (mês/ano):</S.InputTitle>
                      <Field
                        placeholder="__/____"
                        className={`input-display-expiry ${
                          touched.expiry && errors.expiry && 'input-display-error-expiry'
                        }`}
                        name="expiry"
                        type="text"
                      />
                      {touched.expiry && errors.expiry && (
                        <div className="error">{errors.expiry}</div>
                      )}
                    </S.Input>
                    <S.Input width={160}>
                      <S.InputTitle margin={10}>CVV:</S.InputTitle>
                      <Field
                        placeholder="___"
                        className={`input-display-cvv ${
                          touched.cvv && errors.cvv && 'input-display-error-cvv'
                        }`}
                        name="cvv"
                        type="text"
                      />
                      {touched.cvv && errors.cvv && <div className="error">{errors.cvv}</div>}
                    </S.Input>
                  </S.WrapperDiv>
                </>
              </S.Display>
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
