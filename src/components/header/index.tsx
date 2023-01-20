import React from 'react';
import styled from 'styled-components';
import Menu from './menu';

interface HeaderProps {
    itemSelected: number;
}

const Header: React.FC<HeaderProps> = ({ itemSelected }) => {
    return (
        <Container>
            <Menu itemSelected={itemSelected} />
        </Container>
    );
};

const Container = styled.header`
    border-radius: ${({theme}) => theme.border.radius};
    background-color: ${({theme}) => theme.colors.box};
    box-shadow: ${({theme}) => theme.border.shadow};
    padding: 12px 16px;
    margin: 0 0 10px;
`;

export default Header;