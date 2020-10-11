import React , { useEffect, useState } from 'react';
import Products from './components/ListProducts';
import ListProductsAmount from './components/ListProductsAmount';
import {Button, Typography} from '@material-ui/core';
import getData from './services';

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
            <Typography variant="body2" style={{padding: '10px 0 5px 0', fontWeight: 700, fontSize: '0.875rem', color: '#999', textTransform: 'uppercase'}}>Produtos</Typography>
            <Products listItens={listItens}/>
            <ListProductsAmount amount={amountProducts}/>
            <Button color="primary" variant="contained" style={{marginTop: '20px'}}>Seguir para o pagamento</Button>
        </>
    )
}
