import React , { useEffect, useState } from 'react';
import Products from './components/ListProducts';
import ListProductsAmount from './components/ListProductsAmount';
import {Button, Typography} from '@material-ui/core';
import getData from './services';
import {useHistory} from 'react-router-dom'

export default ({setStepActive}) =>{

    const [listItens, setListItens] = useState(null)
    const [amountProducts, setAmountProducts] = useState({})
    const history = useHistory()

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

    const handlePayment = () =>{
        setStepActive(1);
        history.push('/pagamento');
    }

    return(
        <>
            <Typography variant="body2" style={{padding: '10px 0 5px 0', fontWeight: 700, fontSize: '0.875rem', color: '#999', textTransform: 'uppercase'}}>Produtos</Typography>
            <Products listItens={listItens}/>
            <ListProductsAmount amount={amountProducts}/>
            <Button color="primary" variant="contained" style={{marginTop: '20px', boxShadow: 'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)'}} onClick={handlePayment}>Seguir para o pagamento</Button>
        </>
    )
}
