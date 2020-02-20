import React from 'react';
import './styles.css';

const ItemCard = props => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return (
        <div className='item-card-container'>
            <div className='item-img-container'>
                <img src={props.item.product.imageObjects[0].thumbnail} alt={props.item.product.name} />
            </div>
            <div className='itens-details'>
                <p className='item-description-text'>{props.item.product.name}</p>
                <p className='item-value-text'>{formatter.format(props.item.product.priceSpecification.price).replace('R$', 'R$ ')}</p>
            </div>
        </div>
    )
}

export default ItemCard;

