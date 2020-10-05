import React, { useContext } from 'react';
import { Container } from './styles';
import CardContext from '../../contexts/CardContext';

function PaymentData(props) {
    const cardContext = useContext(CardContext);

    return (
        <Container>
            <p>****.****.****.{cardContext.card.number.slice(15, 19)}</p>
            <p>{cardContext.card.name}</p>
            <p>{cardContext.card.validity}</p>
        </Container>
    );
}
export default PaymentData;