import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BoxPaymentData } from './style'
import { PaymentData } from '../../components'
import { Button, Description, SpecificationCart, Header } from '../../components'
import { Grid } from '@mui/material'

function Payment() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [totalCart, setTotalCart] = useState({})
  const navigate = useNavigate()
  const totalCartDucks = useSelector((state) => state.products.specifications)

  const onClickFinishCart = () => {
    navigate('/confirmation')

    /*
      Ducks
      Rotear
    */
  }

  return (
    <>
      <Header typeTab={'PAGAMENTO'} />
      <Grid container alignContent="center" style={{ marginTop: '14%' }}>
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
              <Button textButton={'FINALIZAR O PEDIDO'} onClick={() => onClickFinishCart()} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Payment
