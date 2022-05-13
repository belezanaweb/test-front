import React, { useMemo } from 'react'
import { Card, Container, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: '0px',
    marginTop: '10px'
  },
  card: {
    borderRadius: '3px',
    border: 'solid 1px #EEE',
    marginBottom: '15px',
    padding: '10px',
    background: 'transparent',
    display: 'flex'
  }
})

function SumOfValues({ productList }) {
  const classes = useStyles()
  const subTotal = useMemo(() => productList?.subTotal, [productList])
  const shippingTotal = useMemo(() => productList?.shippingTotal, [productList])
  const discount = useMemo(() => productList?.discount, [productList])
  const total = useMemo(() => productList?.total, [productList])

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item style={{ textAlign: 'start' }}>
            <Typography>PRODUTOS:</Typography>
            <Typography>FRETE:</Typography>
            <Typography style={{ color: '#FF7800' }}>DESCONTO:</Typography>
            <Typography style={{ fontWeight: 'bold' }}>TOTAL :</Typography>
          </Grid>
        </Grid>
        <Grid item style={{ textAlign: 'end' }}>
          <Typography>
            {subTotal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Typography>
          <Typography>
            {shippingTotal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Typography>
          <Typography style={{ color: '#FF7800' }}>
            {discount?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Typography>
          <Typography style={{ fontWeight: 'bold' }}>
            {total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </Grid>
      </Card>
    </Container>
  )
}

export default SumOfValues
