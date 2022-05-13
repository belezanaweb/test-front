import React from 'react'
import { Button, Container, makeStyles } from '@material-ui/core'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductList'
import { useProducts } from '../../hooks/products.hooks'
import SumOfValues from '../../components/SumOfValues'

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
  }
})
function CarryBag() {
  const classes = useStyles()
  localStorage.clear()
  const listProducts = useProducts()

  localStorage.setItem('listProducts', JSON.stringify(listProducts))

  return (
    <div>
      <Header select={1} />
      <Container className={classes.root}>
        <ProductsList data={listProducts} price={true} />
        <SumOfValues productList={listProducts} />
        <div className={classes.buttonContainer}>
          <Button
            id="buttonCarryBag"
            className={classes.button}
            variant="contained"
            size="large"
            href="/pagamento"
          >
            SEGUIR PARA O PAGAMENTO
          </Button>
        </div>
      </Container>
    </div>
  )
}
export default CarryBag
