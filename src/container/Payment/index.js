import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BoxPaymentData, GridContainer } from './style'
import { PaymentData } from '../../components'
import { Button, Description, SpecificationCart, Header } from '../../components'
import { Grid } from '@mui/material'

function Payment() {
  const navigate = useNavigate()
  const totalCartDucks = useSelector((state) => state.products.specifications)
  const dataCreditCard = useSelector((state) => state.creditcard)
  const [buttonActivate, setButtonActivate] = useState(false)

  useEffect(() => {
    let validate = validateDataCreditCard()
    setButtonActivate(validate)
  }, [dataCreditCard])

  const validateDataCreditCard = () => {
    let numCreditCardCustom = dataCreditCard.numCreditCard.replace(/[^a-zA-Z0-9 ]/g, '')
    let numExpirationDate = dataCreditCard.expirationDate.replace(/[^a-zA-Z0-9 ]/g, '')
    if (
      numCreditCardCustom.length == 16 &&
      dataCreditCard.nameCreditCard &&
      numExpirationDate.length == 4 &&
      dataCreditCard.codCreditCard.length == 3
    ) {
      return true
    } else {
      return false
    }
  }

  const onClickFinishCart = () => {
    if (validateDataCreditCard) {
      navigate('/confirmation')
    }
  }

  return (
    <>
      <Header typeTab={'PAGAMENTO'} />
      <GridContainer container alignContent="center">
        <Grid item xs={12}>
          <Grid container>
            <Grid container>
              <Description title={'CARTÃO DE CRÉDITO'} />
              <BoxPaymentData>
                <PaymentData />
              </BoxPaymentData>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <SpecificationCart
                  subTotal={totalCartDucks.subTotal}
                  shippingTotal={totalCartDucks.shippingTotal}
                  discount={totalCartDucks.discount}
                  total={totalCartDucks.total}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Button
                textButton={'FINALIZAR O PEDIDO'}
                disabled={!buttonActivate}
                onClick={() => onClickFinishCart()}
              />
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    </>
  )
}

export default Payment
