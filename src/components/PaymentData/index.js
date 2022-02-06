import React, { useState } from 'react'
import { TitleInput } from './style'
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

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TitleInput> {props.titleInput}</TitleInput>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item xs={12}>
              <TitleInput>Número do cartão:</TitleInput>
              <InputMask
                mask="9999-9999-9999-9999"
                placeholder="____.____.____.____"
                maskChar=" "
                value={numCreditCard}
                onChange={(e) => setNumCreditCard(e.target.value)}
              >
                {() => (
                  <TextField
                    placeholder="____.____.____.____"
                    size="small"
                    fullWidth
                    name="numCreditCard"
                    type="text"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12} style={{ marginTop: '7%' }}>
              <TitleInput>Nome do Titular:</TitleInput>
              <TextField
                placeholder="Como no cartão"
                size="small"
                fullWidth
                name="nameCreditCard"
                type="text"
                value={nameCreditCard}
                onChange={(e) => setNameCreditCard(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={6} style={{ marginTop: '7%' }}>
              <TitleInput>Validade (mês/ano):</TitleInput>
              <InputMask
                mask="99/99"
                placeholder="__/__"
                maskChar=" "
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              >
                {() => (
                  <TextField
                    placeholder="__/__"
                    size="small"
                    fullWidth
                    name="expirationDate"
                    type="text"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={6} style={{ marginTop: '7%' }}>
              <TitleInput>CVV:</TitleInput>
              <InputMask
                mask="999"
                placeholder="___"
                maskChar=" "
                value={codCreditCard}
                onChange={(e) => setCodCreditCard(e.target.value)}
              >
                {() => (
                  <TextField
                    placeholder="___"
                    size="small"
                    fullWidth
                    name="codCreditCard"
                    type="text"
                  />
                )}
              </InputMask>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentData
