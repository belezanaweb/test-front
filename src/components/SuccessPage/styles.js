import styled from "styled-components";

export const SuccessIconContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3.25% 0px; /** 12px */

    @media (min-width: 720px) {
        margin: 3.25% 0 0 0;
    }
`

export const SuccessIconImg = styled.img`
    width: 40px; 
    height: 40px;
    color: #FF7800;

    @media (min-width: 720px) {
        width: 80px;
        height: 80px;
    }
`

export const SuccessText = styled.p`
    height: 17px;
    width: 100%;
    color: #FF7800;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
`

export const PaymentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
`

