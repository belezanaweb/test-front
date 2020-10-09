import React from 'react';
import Link from './Link';
import { Container, Content } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">Sacola</Link>
        <Link to="/pagamento">Pagamento</Link>
        <Link to="/confirmacao">Confirmação</Link>
      </Content>
    </Container>
  );
};

export default NavBar;
