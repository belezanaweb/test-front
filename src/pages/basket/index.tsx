import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import ButtonNextStepBasket from '../../components/buttons/basket';
import Loading from '../../components/loading';

import { useBasket, useFetchBasket } from '../../services/basket/hooks';
const Basket: React.FC = () => {
    const { basket } = useBasket();
    useFetchBasket();
    return (
        <>
            <Header itemSelected={0} />
            {!!basket ? <PageContainer>
                <ProductList />
                <PaymentDescription />
                <ButtonNextStepBasket />
            </PageContainer> : <Loading />}
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
    max-width: 960px;
    margin: 0 auto;
`;

export default Basket