import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function EmptyMessage() {
  return (
    <Container>
      Não há itens no carrinho
      <br />
      <Link to="/">Ver Produtos</Link>
    </Container>
  );
}
