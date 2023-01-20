import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import Loading from '../../components/loading';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Wrapper from '../../components/wrapper';
import { useBasket, useFetchBasket } from '../../services/basket/hooks';
const Basket: React.FC = () => {
    const { basket } = useBasket();
    const navigate = useNavigate()
    useFetchBasket();
    return (
        <>
            <Header itemSelected={0} />
            {!!basket ? <Wrapper>
                <ProductList />
                <PaymentDescription />
                <Button onClick={()=> navigate('/payment')}>SEGUIR PARA O PAGAMENTO</Button>
            </Wrapper> : <Loading />}
        </>
    )
}

export default Basket