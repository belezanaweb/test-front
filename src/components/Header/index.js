import React from 'react';

import { Container } from './styles';

function Header() {
  return(
    <Container>
      <li><button>Sacola</button></li>
      <li><button>Pagamento</button></li>
      <li><button>Confirmação</button></li>
    </Container>
  );
}

export default Header;
