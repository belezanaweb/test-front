import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import { useFetchBasket } from '../../services/basket/hooks';

const Confirmation: React.FC = () => {
    useFetchBasket();
    return (
        <>
            <Header itemSelected={2} />
            <PageContainer>
                <ProductList sizeImage='thumbnail' isShowPrice={false} />
                <PaymentDescription />
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Confirmation