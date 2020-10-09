import React from 'react';
import { Container, Content, Link } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link exact to="/">
          Sacola
        </Link>
        <Link to="/pagamento">Pagamento</Link>
        <Link to="/confirmacao">Confirmação</Link>
      </Content>
    </Container>
  );
};

export default NavBar;
