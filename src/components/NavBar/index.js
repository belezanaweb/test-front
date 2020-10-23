import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

function NavBar() {
  const location = useLocation();
  const { pathname } = location;

  const isActive = page => pathname === page ? 'active' : '';

  return (
    <Container>
      <ul>
        <li>
          <Link className={isActive('/checkout')} to="/checkout">Sacola</Link>
        </li>

        <li>
          <Link className={isActive('/payment')} to="/payment">Pagamento</Link>
        </li>

        <li>
          <Link className={isActive('/success')} to="/success">Confirmação</Link>
        </li>
      </ul>
    </Container>
  );
}

export default NavBar;
