import React from 'react';
import { Container } from './styles';

function Header() {
  return(
    <Container>
      <li><button
          activeClassName="navbar__link--active"
          className="navbar__link">
           Sacola
      </button></li>

      <li><button
          activeClassName="navbar__link--active"
          className="navbar__link"
      >Pagamento</button></li>
      <li><button
          activeClassName="navbar__link--active"
          className="navbar__link"
      >Confirmação</button></li>
    </Container>
  );
}

export default Header;
