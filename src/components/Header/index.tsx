import React from 'react';
import { useHistory } from 'react-router';

import Logo from 'assets/logo.png';

import { GlobalContainer } from 'styles/global';
import { Container, Item } from './styles';

const Header: React.FC = () => {
  const router = useHistory();
  const currentPath = router.location.pathname;

  return (
    <Container>
      <GlobalContainer>
        <img src={Logo} alt="Logo Beleza Na Web" />
        <Item selected={currentPath === '/cart'}>SACOLA</Item>
        <Item selected={currentPath === '/payment'}>PAGAMENTO</Item>
        <Item selected={currentPath === '/success'}>CONFIRMAÇÃO</Item>
      </GlobalContainer>
    </Container>
  );
};

export default Header;
