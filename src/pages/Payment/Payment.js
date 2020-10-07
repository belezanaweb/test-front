import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'

import data from '../../data/endpoint.json'

import Total from '../../components/Total/Total'
import Button from '../../components/Button/Button'

const StyledPageTitle = styled.h2`
  color: #999;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: -7px;
`

const StyledBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 12px 12px 0 13px;
  margin: 10px 10px 19px 9px;
`

const StyledLabel = styled.label`
  display: block;
  margin: 6px 0;
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
`

const StyledInput = styled.input`
  display: block;
  margin: 0px 0 23px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  height: 46px;
  width: 100%;
  color: #212122;
  font-size: 16px;
  padding: 15px 11px 10px;
  &::placeholder {
    color: #e0e7ee;
  }
`

function Payment({ setPaymentData }) {
  const history = useHistory()

  function isValidCreditCard(value) {
    if (value.length === 16 && /^\d+$/.test(value)) {
      return true
    }
    return false
  }
  function isValidName(value) {
    if (value.length > 0) {
      return true
    }
    return false
  }
  function isValidDate(value) {
    if (/^\d{2}\/\d{4}$/.test(value)) {
      return true
    }
    return false
  }
  function isValidCVV(value) {
    if (/^\d{3}$/.test(value)) {
      return true
    }
    return false
  }

  function styleError(error) {
    return error ? { borderColor: 'red' } : {}
  }

  function submit(values) {
    console.log('submit -> values', values)
    setPaymentData(values)
    history.push('/confirmacao')
  }

  return (
    <>
      <StyledPageTitle>Cartão de crédito</StyledPageTitle>

      <Formik
        initialValues={{
          cardNumber: '',
          name: '',
          date: '',
          cvv: ''
        }}
        validate={(values) => {
          const errors = {}

          if (!isValidCreditCard(values.cardNumber)) {
            errors.cardNumber = 'cartão inválido'
          }
          if (!isValidName(values.name)) {
            errors.name = 'preencha o nome'
          }
          if (!isValidDate(values.date)) {
            errors.date = 'data inválida'
          }
          if (!isValidCVV(values.cvv)) {
            errors.cvv = 'código inválido'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          submit(values)
        }}
        initialErrors={{ cardNumber: '', name: '', date: '', cvv: '' }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <StyledBox>
                <div>
                  <StyledLabel htmlFor={'cardNumber'}>Número do cartão:</StyledLabel>
                  <StyledInput
                    id={'cardNumber'}
                    placeholder={'____.____.____.____'}
                    maxLength={16}
                    name="cardNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cardNumber}
                    autoComplete={'off'}
                    style={styleError(errors.cardNumber && touched.cardNumber)}
                  />
                </div>
                <div>
                  <StyledLabel htmlFor={'name'}>Nome do Titular:</StyledLabel>
                  <StyledInput
                    id={'name'}
                    placeholder={'Como no cartão'}
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style={styleError(errors.name && touched.name)}
                  />
                </div>
                <div>
                  <StyledLabel htmlFor={'date'}>Validade mês/ano):</StyledLabel>
                  <StyledInput
                    id={'date'}
                    maxLength={7}
                    placeholder={'_ _ / _ _ _ _'}
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    style={styleError(errors.date && touched.date)}
                  />
                </div>
                <div>
                  <StyledLabel htmlFor={'cvv'}>CVV:</StyledLabel>
                  <StyledInput
                    id={'cvv'}
                    maxLength={3}
                    placeholder={'_ _ _'}
                    name="cvv"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                    autoComplete={'off'}
                    style={styleError(errors.cvv && touched.cvv)}
                  />
                </div>
              </StyledBox>
              <Total
                subTotal={data.subTotal}
                shippingTotal={data.shippingTotal}
                discount={data.discount}
                total={data.total}
              />
              <Button
                disabled={!isValid}
                text={'Finalizar o pedido'}
                handleClick={() => submit(values)}
              />
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Payment
