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
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px 16px;
  margin: 0 0 10px;
`;

const Title = styled.h1`
  font-size: 26px;
  text-align: center;
`;
export default Header;