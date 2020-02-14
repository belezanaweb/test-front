import React, { Component } from 'react';
import { Container } from './styles';

class Success extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Sua compra foi finalizada com sucesso!</h1>
          <a href="/">Voltar para galeria de produtos</a>
        </div>
      </Container>
    );
  }
}

export default Success;
