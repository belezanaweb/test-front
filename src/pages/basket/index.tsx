import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import Button from '../../components/button';

const Basket: React.FC = () => {

    return (
        <>
            <Header itemSelected={0} />
            <PageContainer>
                <ProductList />
                <PaymentDescription />
                <Button>SEGUIR PARA O PAGAMENTO</Button>
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Basket