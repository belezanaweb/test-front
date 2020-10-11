import React from 'react';
import ListProductsAmount from './components/ListProductsAmount';
import TitleStep from './components/TitleSteps';

export default (props) =>{
    return(
        <>
            <TitleStep title="Pagamento"/>
            <ListProductsAmount amount={props.data.amountProducts}/>
        </>
    )
}
