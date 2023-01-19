import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import CreditCardForm from '../../components/credit-card-form';
import { useFetchBasket } from '../../services/basket/hooks';

const Payment: React.FC = () => {
    useFetchBasket();
    return (
        <>
            <Header itemSelected={1} />
            <PageContainer>
                <CreditCardForm />
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Payment