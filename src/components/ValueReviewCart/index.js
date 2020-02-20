import React from 'react';
import './styles.css';

const ValueReviewCart = props => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return (
        <div className='value-container'>
            <div>
                <p>PRODUTOS</p>
                <p>{formatter.format(props.subTotal).replace('R$', 'R$ ')}</p>
            </div>
            <div>
                <p>FRETE</p>
                <p>{formatter.format(props.shippingTotal).replace('R$', 'R$ ')}</p>
            </div>
            <div className='value-container-discount'>
                <p>DESCONTO</p>
                <p>- {formatter.format(props.discount).replace('R$', 'R$ ')}</p>
            </div>
            <div className='value-container-total'>
                <p>TOTAL</p>
                <p>{formatter.format(props.total).replace('R$', 'R$ ')}</p>
            </div>
        </div>
    )
}

export default ValueReviewCart;

