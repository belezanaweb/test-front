import React , { useEffect, useState } from 'react';
import HeaderDetailsCartSteps from './components/HeaderDetailsCartSteps';
import Products from './components/ListProducts';
import ListProductsAmount from './components/ListProductsAmount';
import {Button, Container, Typography} from '@material-ui/core'
import getData from './services'

export default () =>{

    const [listItens, setListItens] = useState(null)
    const [amountProducts, setAmountProducts] = useState({})

    useEffect(()=>{
      getData()
          .then(response =>{
              setListItens(response.data.items)
              setAmountProducts(prevState =>({...prevState, 
                products: response.data.total,
                freight: response.data.shippingTotal,
                discount: response.data.discount,
                total: response.data.total
            }))
          })
    },[])

    return(
        <>
        <HeaderDetailsCartSteps/>
        <Container maxWidth="lg" style={{height: '100vh'}}>
            <Typography variant="body2" style={{padding: '4px 0', fontWeight: 700, color: '#999', textTransform: 'uppercase'}}>Produtos</Typography>
            <Products listItens={listItens}/>
            <ListProductsAmount amount={amountProducts}/>
            <Button color="primary" variant="contained" style={{marginTop: '20px'}}>Seguir para o pagamento</Button>
        </Container>
        </>
    )
}
