import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import SuccessMessage from '../../components/success-message';
import PaymentUserInfo from '../../components/payment-user-info';
import { useRedirectRouterInvalid } from '../../services/common/hooks';
import Wrapper from '../../components/wrapper';

const Confirmation: React.FC = () => {
    return useRedirectRouterInvalid("confirmation") ? (
        <>
            <Header itemSelected={2} />
            <Wrapper>
                <SuccessMessage />
                <PaymentUserInfo />
                <ProductList sizeImage='thumbnail' isShowPrice={false} />
                <PaymentDescription />
            </Wrapper>
        </>
    ) : null;
}

export default Confirmation