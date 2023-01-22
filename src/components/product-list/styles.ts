
import styled from 'styled-components';

export const Container = styled.div`
    border-radius: ${({theme}) => theme.border.radius};
    background-color: ${({theme}) => theme.colors.box};
    box-shadow: ${({theme}) => theme.border.shadow};
    padding: 12px;
    margin: 0 0 20px;
    div:last-child {
    margin: 0
    }
`;
