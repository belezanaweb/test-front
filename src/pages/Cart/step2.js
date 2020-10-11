import React, { useCallback, useState } from 'react';
import ListProductsAmount from './components/ListProductsAmount';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import TitleStep from './components/TitleSteps';
import Form from './components/form';

export default (props) =>{
    const history = useHistory()

    const handleForm = useCallback((value)=>{
        setDisabledButtonFinish(value)
    },[])

    const [disabledButtonFinish, setDisabledButtonFinish] = useState(true)

    const handlePaymentSuccess = () =>{
        history.push('./confirmacao')
    }

    return(
        <>
            <TitleStep title="Cartão de crédito"/>
            <Form handleForm={handleForm} />
            <ListProductsAmount amount={props.data.amountProducts}/>
            <Button disabled={disabledButtonFinish} color="primary" variant="contained" type="submit" onClick={handlePaymentSuccess} form="formCredicCard">Finalizar o pedido</Button>
        </>
    )
}
