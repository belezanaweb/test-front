import React from 'react';
import Header from '../../components/header';
import CreditCardForm from '../../components/credit-card-form';
import { useRedirectRouterInvalid } from '../../services/common/hooks';
import Wrapper from '../../components/wrapper';

const Payment: React.FC = () => {
    return useRedirectRouterInvalid("payment") ? (
        <>
            <Header itemSelected={1} />
            <Wrapper>
                <CreditCardForm />
            </Wrapper>
        </>
    ) : null;
}

export default Payment