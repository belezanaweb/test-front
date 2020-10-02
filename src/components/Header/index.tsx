import React from 'react';
import { useHistory } from 'react-router';

import { Container, Item } from './styles';

const Header: React.FC = () => {
  const router = useHistory();
  const currentPath = router.location.pathname;

  return (
    <Container>
      <Item selected={currentPath === '/cart'}>SACOLA</Item>
      <Item selected={currentPath === '/payment'}>PAGAMENTO</Item>
      <Item selected={currentPath === '/success'}>CONFIRMAÇÃO</Item>
    </Container>
  );
};

export default Header;
