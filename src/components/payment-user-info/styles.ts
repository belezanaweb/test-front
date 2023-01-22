import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.border.radius};
    background-color: ${({theme}) => theme.colors.box};
    box-shadow: ${({theme}) => theme.border.shadow};
    padding: 14px 10px;
    margin: 0 0 20px;
`;

export const Text = styled.p`
    color: #000;
    font-size: 14px;
    line-height: 17px;
`

