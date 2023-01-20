import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import CreditCardForm from '../../components/credit-card-form';
import { useRedirectRouterInvalid } from '../../services/common/hooks';

const Payment: React.FC = () => {
    useRedirectRouterInvalid()
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
    max-width: 960px;
    margin: 0 auto;
`;

export default Payment