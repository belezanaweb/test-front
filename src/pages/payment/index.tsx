import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import ButtonNextStepPayment from '../../components/buttons/payment';
import { useFetchBasket } from '../../services/basket/hooks';

const Payment: React.FC = () => {
    useFetchBasket();
    return (
        <>
            <Header itemSelected={1} />
            <PageContainer>
                <PaymentDescription />
                <ButtonNextStepPayment />
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Payment