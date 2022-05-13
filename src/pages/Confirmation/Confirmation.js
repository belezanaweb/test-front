import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../components/Header'
import { CheckCircleOutlineRounded } from '@material-ui/icons'
import ProductsList from '../../components/ProductList'
import SumOfValues from '../../components/SumOfValues'

const useStyles = makeStyles({
  root: {
    padding: '0px',
    alignItems: 'center',
    textAlignLast: 'center'
  },
  text: {
    color: '#FF7800',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px'
  },
  card: {
    textAlignLast: 'auto',
    marginTop: '20px'
  },
  paper: {
    padding: '9px'
  }
})

function Confirmation() {
  const classes = useStyles()
  const listProducts = JSON.parse(localStorage.getItem('listProducts'))
  const CreditCardNumber = localStorage.getItem('creditCardNumber')
  const CreditCardName = localStorage.getItem('creditCardName')
  const CreditCardValidate = localStorage.getItem('creditCardValidate')

  return (
    <Container className={classes.root}>
      <Header select={3} />
      <CheckCircleOutlineRounded
        style={{ color: '#FF7800', fontSize: 50, marginTop: '12px' }}
        fontSize="large"
      />
      <Typography className={classes.text}>COMPRA EFETUADA COM SUCESSO</Typography>
      <Container className={classes.card}>
        <Typography style={{ color: '#999', fontWeight: 'bold' }}>PAGAMENTO</Typography>
        <Paper elevation={3} className={classes.paper}>
          <Typography>{CreditCardNumber}</Typography>
          <Typography>{CreditCardName}</Typography>
          <Typography>{CreditCardValidate}</Typography>
        </Paper>
        <ProductsList data={listProducts} />
        <SumOfValues productList={listProducts} />
      </Container>
    </Container>
  )
}
export default Confirmation
