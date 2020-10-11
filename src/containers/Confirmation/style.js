import styled from 'styled-components';
import CardTotalShipping from '../../components/CardTotalShipping';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEE;
    height: 100%;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-areas: "card image-sucess" "card payment" "card card-shipping";
        justify-content: center;
        flex-direction: row;
        align-items: flex-start;
  }
`;

export const PaymentDate = styled.div`
    height: 68px;
    width: 310px;
`;

export const Values = styled(CardTotalShipping)`
`;

export const Data = styled.div`
    color: #000;
    line-height: 17px;
    padding-top: 0.5vh;
`;

export const Img = styled.img`
    height: 67px;
    width: 266px;
    padding-top: 2vh;
    padding-bottom: 1vh;

    @media (min-width: 1024px) {
        padding-bottom: 1vh;
        padding-top: 2vh;
        grid-area: image-sucess;
        justify-self: center;
  }
`;
