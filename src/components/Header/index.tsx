import React from 'react';
import { useHistory } from 'react-router';

import { GlobalContainer } from 'styles/global';
import { Container, Item } from './styles';

const Header: React.FC = () => {
  const router = useHistory();
  const currentPath = router.location.pathname;

  return (
    <Container>
      <GlobalContainer>
        <Item selected={currentPath === '/cart'}>SACOLA</Item>
        <Item selected={currentPath === '/payment'}>PAGAMENTO</Item>
        <Item selected={currentPath === '/success'}>CONFIRMAÇÃO</Item>
      </GlobalContainer>
    </Container>
  );
};

export default Header;
