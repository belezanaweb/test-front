import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import CreditCardForm from '../../components/credit-card-form';
import { useRedirectRouterInvalid } from '../../services/common/hooks';
import Wrapper from '../../components/wrapper';

const Payment: React.FC = () => {
    useRedirectRouterInvalid()
    return (
        <>
            <Header itemSelected={1} />
            <Wrapper>
                <CreditCardForm />
            </Wrapper>
        </>
    )
}

export default Payment