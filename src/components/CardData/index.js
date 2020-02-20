import React from 'react';
import './styles.css';

const CardData = props => {
    const finalNumCard = props.cardNum.split('.');
    return (
        <div className='data-container'>
            <p className='card-data-text' >****.****.****.{finalNumCard[3]}</p>
            <p className='card-data-text' >{props.name}</p>
            <p className='card-data-text' >{props.validateData}</p>
        </div>
    )
}

export default CardData;

