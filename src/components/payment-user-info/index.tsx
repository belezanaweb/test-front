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
    border-radius: ${({theme}) => theme.border.radius};
    background-color: ${({theme}) => theme.colors.box};
    box-shadow: ${({theme}) => theme.border.shadow};
    padding: 14px 10px;
    margin: 0 0 20px;
`;

const Text = styled.p`
    color: #000;
    font-size: 14px;
    line-height: 17px;
`


export default PaymentUserInfo;