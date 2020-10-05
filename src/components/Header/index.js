import React from 'react';
import { Container } from './styles';

function Header({page}) {

  return(
    <Container index={page}>
      <button  >Sacola</button>
     <button >Pagamento</button>
     <button >Confirmação</button>
    </Container>
  );
}

export default Header;
