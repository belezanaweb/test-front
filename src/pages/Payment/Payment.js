import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Header from '../../components/Header'
import SumOfValues from '../../components/SumOfValues'
import ValidateCreditCard from '../../services/ValidateCreditCard'
import * as moment from 'moment'
import InputMask from 'react-input-mask'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    marginTop: '10px'
  },
  button: {
    backgroundColor: '#FF7800',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%'
  },
  buttonContainer: {
    padding: '0px',
    marginTop: '10px'
  },
  paper: {
    borderRadius: '3px',
    color: '#fff',
    padding: '12px'
  },
  form: {
    '& label.Mui-focused': {
      color: '#A43287'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A43287'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#A43287'
      }
    },
    '& .MuiFormControl-root': {
      marginBottom: '25px'
    }
  }
})

function Payment() {
  const classes = useStyles()
  const listProducts = JSON.parse(localStorage.getItem('listProducts'))
  const [disabledButton, setDisabledButton] = useState(true)
  const [creditCardNumber, setCreditCardNumber] = useState()
  const [creditCardName, setCreditCardName] = useState()
  const [creditCardValidate, setCreditCardValidate] = useState()
  const [creditCardCVV, setCreditCardCVV] = useState()
  const [errorCreditCardNumber, setErrorCreditCardNumber] = useState(false)
  const [errorCreditCardName, setErrorCreditCardName] = useState(false)
  const [errorCreditCardValidate, setErrorCreditCardValidate] = useState(false)
  const [errorCreditCardCVV, setErrorCreditCardCVV] = useState(false)

  const handleChangeCreditCard = (event) => {
    localStorage.setItem('creditCardNumber', event.target.value)
    setCreditCardNumber(event.target.value)
    event.preventDefault()
    const cardNumberValidate = ValidateCreditCard(event.target.value)
    if (!cardNumberValidate && String(creditCardNumber).length !== 0) {
      setErrorCreditCardNumber(true)
    } else {
      setErrorCreditCardNumber(false)
    }
  }

  const handleChangeCardName = (event) => {
    localStorage.setItem('creditCardName', event.target.value)
    setCreditCardName(event.target.value)
    event.preventDefault()
    if (String(event.target.value).length === 0 || String(event.target.value).trim() === '') {
      setErrorCreditCardName(true)
    } else {
      setErrorCreditCardName(false)
    }
  }

  const handleChangeCardValidate = (event) => {
    localStorage.setItem('creditCardValidate', event.target.value)
    setCreditCardValidate(event.target.value)
    event.preventDefault()
    if (!moment(String(event.target.value), 'MM/YYYY', true).isValid()) {
      setErrorCreditCardValidate(true)
    } else {
      setErrorCreditCardValidate(false)
    }
  }

  const handleChangeCardCVV = (event) => {
    localStorage.setItem('creditCardCVV', event.target.value)
    setCreditCardCVV(event.target.value)
    event.preventDefault()
    if (String(event.target.value).length < 3 || String(event.target.value).length > 4) {
      setErrorCreditCardCVV(true)
    } else {
      setErrorCreditCardCVV(false)
    }
  }

  useEffect(() => {
    if (
      creditCardNumber !== undefined &&
      creditCardName !== undefined &&
      creditCardValidate !== undefined &&
      creditCardCVV !== undefined
    ) {
      if (
        !errorCreditCardNumber &&
        !errorCreditCardName &&
        !errorCreditCardValidate &&
        !errorCreditCardCVV
      ) {
        setDisabledButton(false)
      }
    }
  }, [
    creditCardNumber,
    creditCardName,
    creditCardValidate,
    creditCardCVV,
    errorCreditCardNumber,
    errorCreditCardName,
    errorCreditCardValidate,
    errorCreditCardCVV
  ])
  return (
    <div>
      <Header select={2} />
      <Container className={classes.root}>
        <Typography style={{ color: '#999', fontWeight: 'bold' }}>CARTÃO DE CRÉDITO</Typography>
        <Paper elevation={3} className={classes.paper}>
          <form className={classes.form}>
            <InputMask
              mask="9999.9999.9999.9999"
              value={creditCardNumber}
              disabled={false}
              maskChar=" "
              onChange={handleChangeCreditCard}
            >
              {() => (
                <TextField
                  id="creditCardNumber"
                  label="Número do cartão:"
                  required
                  fullWidth
                  variant="outlined"
                  error={errorCreditCardNumber}
                  helperText={errorCreditCardNumber && 'Número incompleto ou inválido.'}
                />
              )}
            </InputMask>
            <TextField
              required
              id="creditCardName"
              label="Nome do Titular:"
              variant="outlined"
              placeholder="Como no cartão"
              fullWidth
              value={creditCardName}
              onChange={handleChangeCardName}
              error={errorCreditCardName}
            />
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <InputMask
                  mask="99/9999"
                  value={creditCardValidate}
                  disabled={false}
                  maskChar=" "
                  onChange={handleChangeCardValidate}
                >
                  {() => (
                    <TextField
                      id="creditCardValidate"
                      label="Validade (mês/ano):"
                      required
                      fullWidth
                      variant="outlined"
                      error={errorCreditCardValidate}
                      helperText={errorCreditCardValidate && 'Data inválida.'}
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="creditCardCVV"
                  label="CVV:"
                  variant="outlined"
                  placeholder="___"
                  fullWidth
                  value={creditCardCVV}
                  onChange={handleChangeCardCVV}
                  error={errorCreditCardCVV}
                  helperText={errorCreditCardCVV && 'Número incompleto ou inválido.'}
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
        <SumOfValues productList={listProducts} />
        <div className={classes.buttonContainer}>
          <Button
            id="buttonPayment"
            type="submit"
            className={classes.button}
            variant="contained"
            size="large"
            href="/sucesso"
            disabled={disabledButton}
          >
            FINALIZAR O PEDIDO
          </Button>
        </div>
      </Container>
    </div>
  )
}
export default Payment
