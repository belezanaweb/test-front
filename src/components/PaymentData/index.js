import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TitleInput, GridItemInput } from './style'
import { Grid, TextField } from '@mui/material'
import InputMask from 'react-input-mask'

/*
    Component for Payment Data - Credit Card
*/

const PaymentData = (props) => {
  const [numCreditCard, setNumCreditCard] = useState('')
  const [nameCreditCard, setNameCreditCard] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [codCreditCard, setCodCreditCard] = useState('')
  const [errorField, setErrorField] = useState({
    numCreditCard: false,
    nameCreditCard: false,
    expirationDate: false,
    codCreditCard: false
  })
  const dataCreditCard = useSelector((state) => state.creditcard)
  const dispatch = useDispatch()
  useEffect(() => {
    if (dataCreditCard.numCreditCard) {
      setNumCreditCard(dataCreditCard.numCreditCard)
    }

    if (dataCreditCard.nameCreditCard) {
      setNameCreditCard(dataCreditCard.nameCreditCard)
    }

    if (dataCreditCard.expirationDate) {
      setExpirationDate(dataCreditCard.expirationDate)
    }

    if (dataCreditCard.codCreditCard) {
      setCodCreditCard(dataCreditCard.codCreditCard)
    }
  }, [dataCreditCard])

  const onChangeNumCreditCard = (value) => {
    setNumCreditCard(value)
    let numCreditCardCustom = value.replace(/[^a-zA-Z0-9 ]/g, '')
    if (numCreditCardCustom.length != 16) setErrorField({ ...errorField, numCreditCard: true })
    else {
      dispatch({ type: 'creditCard/ADD_NUMBER_CREDITCARD', numCreditCard: value })
      setErrorField({ ...errorField, numCreditCard: false })
    }
  }

  const onChangeNameCreditCard = (value) => {
    setNameCreditCard(value)
    if (!nameCreditCard) setErrorField({ ...errorField, nameCreditCard: true })
    else {
      dispatch({ type: 'creditCard/ADD_NAME_CREDITCARD', nameCreditCard: value })
      setErrorField({ ...errorField, nameCreditCard: false })
    }
  }

  const onChangeExpirationDateCreditCard = (value) => {
    setExpirationDate(value)
    let numExpirationDate = expirationDate.replace(/[^a-zA-Z0-9 ]/g, '')
    if (numExpirationDate.length != 4) setErrorField({ ...errorField, expirationDate: true })
    else {
      dispatch({ type: 'creditCard/ADD_EXPIRATIONDATE_CREDITCARD', expirationDate: value })
      setErrorField({ ...errorField, expirationDate: false })
    }
  }

  const onChangeCodCreditCard = (value) => {
    setCodCreditCard(value)
    if (!codCreditCard) setErrorField({ ...errorField, expirationDate: true })
    else {
      dispatch({ type: 'creditCard/ADD_COD_CREDITCARD', codCreditCard: value })
      setErrorField({ ...errorField, expirationDate: false })
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="flex-end">
            <GridItemInput item xs={12}>
              <TitleInput>Número do cartão:</TitleInput>
              <InputMask
                mask="9999-9999-9999-9999"
                placeholder="____.____.____.____"
                maskChar=" "
                value={numCreditCard}
                onChange={(e) => onChangeNumCreditCard(e.target.value)}
              >
                {() => (
                  <TextField
                    error={errorField.numCreditCard}
                    placeholder="____.____.____.____"
                    size="small"
                    fullWidth
                    name="numCreditCard"
                    type="text"
                  />
                )}
              </InputMask>
            </GridItemInput>
            <GridItemInput item xs={12} marginTop={'7%'}>
              <TitleInput>Nome do Titular:</TitleInput>
              <TextField
                error={errorField.nameCreditCard}
                placeholder="Como no cartão"
                size="small"
                fullWidth
                name="nameCreditCard"
                type="text"
                value={nameCreditCard}
                onChange={(e) => onChangeNameCreditCard(e.target.value)}
              ></TextField>
            </GridItemInput>
            <GridItemInput item xs={6} marginTop={'7%'}>
              <TitleInput>Validade (mês/ano):</TitleInput>
              <InputMask
                mask="99/99"
                placeholder="__/__"
                maskChar=" "
                value={expirationDate}
                onChange={(e) => onChangeExpirationDateCreditCard(e.target.value)}
              >
                {() => (
                  <TextField
                    error={errorField.expirationDate}
                    placeholder="__/__"
                    size="small"
                    fullWidth
                    name="expirationDate"
                    type="text"
                  />
                )}
              </InputMask>
            </GridItemInput>
            <GridItemInput item xs={6} marginTop={'7%'}>
              <TitleInput>CVV:</TitleInput>
              <InputMask
                mask="999"
                placeholder="___"
                maskChar=" "
                value={codCreditCard}
                onChange={(e) => onChangeCodCreditCard(e.target.value)}
              >
                {() => (
                  <TextField
                    error={errorField.codCreditCard}
                    placeholder="___"
                    size="small"
                    fullWidth
                    name="codCreditCard"
                    type="text"
                  />
                )}
              </InputMask>
            </GridItemInput>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentData
