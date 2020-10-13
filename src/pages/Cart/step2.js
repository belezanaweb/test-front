import React, { useCallback, useState } from 'react';
import ListProductsAmount from './components/ListProductsAmount';
import {Button} from '@material-ui/core';
import TitleStep from './components/TitleSteps';
import Form from './components/form';

export default (props) =>{
    const [disabledButtonFinish, setDisabledButtonFinish] = useState(true)
    
    const enabledFormSend = useCallback((value)=>{
        setDisabledButtonFinish(value)
    },[])

    return(
        <>
            <TitleStep title="Cartão de crédito"/>
            <Form enabled={enabledFormSend} />
            <ListProductsAmount amount={props.data.amountProducts}/>
            <Button 
                disabled={disabledButtonFinish} 
                color="primary" 
                variant="contained"
                type="submit"
                form="formCredicCard"
                style={{ marginTop: '20px'}}
            >Finalizar o pedido</Button>
        </>
    )
}
