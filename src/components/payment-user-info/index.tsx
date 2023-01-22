import React from 'react';
import { useCreditCard } from '../../services/payment/hooks';
import { lastNumbersCard } from "../../services/payment/helpers";
import * as S from './styles'

const PaymentUserInfo: React.FC = () => {
    const { creditCard }  = useCreditCard();
    return (
        <S.Container>
            <S.Text data-testid="PaymentUserInfo-info-user">
                ****.****.****.{lastNumbersCard(creditCard.number)} <br />
                {creditCard.name.toUpperCase()}<br />
                {creditCard.date}
            </S.Text>
        </S.Container>
    )
};


export default PaymentUserInfo;