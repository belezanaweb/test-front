import React from 'react';
import styled from 'styled-components';

const ProductCard: React.FC = () => {
  return (
    <Container>
        <Img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"/>
        <ProductionDescription>
            <Title>LÓréal Professionnel Expert Absolut Repair Cortex Lipidium</Title>
            <Price>R$ 299,00</Price>
        </ProductionDescription>
    </Container>
  );
};

const ProductionDescription = styled.div`
    display: block;
    flex: 1;
`
const Img = styled.img`
    width: 65px;
`
const Container = styled.div`
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: flex;
    margin: 0 0 15px;
    padding: 12px 10px;
`;

const Title = styled.h2`
    color: #212122;
    font-size: 13px;
    line-height: 16px;
`
const Price = styled.p`
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
    margin: 15px 0 0;
`
export default ProductCard;