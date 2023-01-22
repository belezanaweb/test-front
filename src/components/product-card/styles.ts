
import styled from 'styled-components';

export const ProductionDescription = styled.div`
    display: block;
    flex: 1;
`
export const Container = styled.div`
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.border.radius};
    border: 1px solid #EEE;
    display: flex;
    margin: 0 0 15px;
    padding: 12px 9px;
`;

export const Title = styled.h2`
    color: #212122;
    font-size: ${({theme}) => theme.fontSizes.medium};
    line-height: ${({theme}) => theme.fontSizes.large};
`
export const Price = styled.p`
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
    margin: 15px 0 0;
`