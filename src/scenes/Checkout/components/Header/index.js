import React, { Component } from 'react';

import { Container, Item } from './styles';

export default class components extends Component {
  render() {
    return (
        <Container>
          <Item>Sacola</Item>
          <Item>Pagamento</Item>
          <Item>Confirmação</Item>
        </Container>
    );
  }
}