


import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.border.radius};
    border: 1px solid #CCC;
    padding: 15px 14px 5px;
    margin: 0 0 20px;
`;

export const Line = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px;
`

export const Item = styled.span`
    color: ${({theme}) => theme.colors.default};
    font-size: 14px;
    line-height: 17px;
`

export const ItemHighlighted = styled.span`
    color: ${({theme}) => theme.colors.highlight};
    font-size: 14px;
    line-height: 17px;
`

export const ItemTotal = styled.span`
    font-weight: bold;
`

