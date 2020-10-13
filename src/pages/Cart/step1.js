import React from 'react';
import Products from './components/ListProducts';
import ListProductsAmount from './components/ListProductsAmount';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import TitleStep from './components/TitleSteps'

export default (props) =>{
    const history = useHistory()

    const handlePayment = () =>{
        history.push('/pagamento');
    }

    return(
        <>
            <TitleStep title="Produtos"/>
            <Products listItens={props.data.listItens}/>
            <ListProductsAmount amount={props.data.amountProducts}/>
            <Button color="primary" variant="contained" onClick={handlePayment} style={{ marginTop: '20px'}}>Seguir para o pagamento</Button>
        </>
    )
}
