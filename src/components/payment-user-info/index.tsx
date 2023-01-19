import React from 'react';
import styled from 'styled-components';
import { useCreditCard } from '../../services/payment/hooks';
import { lastNumbersCard } from "../../services/payment/helpers"
const PaymentUserInfo: React.FC = () => {
    const { creditCard }  = useCreditCard();
    return (
        <Container>
            <Text>
                ****.****.****.{lastNumbersCard(creditCard.number)} <br />
                {creditCard.name.toUpperCase()}<br />
                {creditCard.date}
            </Text>
        </Container>
    )
};

const Container = styled.div`
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);  
    padding: 14px 10px;
    margin: 0 0 20px;
`;

const Text = styled.p`
    color: #000;
    font-size: 14px;
    line-height: 17px;
`


export default PaymentUserInfo;