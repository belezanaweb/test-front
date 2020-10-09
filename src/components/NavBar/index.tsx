import React from 'react';
import Link from '../Link';
import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Sacola</Link>
      <Link to="/pagamento">Pagamento</Link>
      <Link to="/confirmacao">Confirmação</Link>
    </Container>
  );
};

export default NavBar;
