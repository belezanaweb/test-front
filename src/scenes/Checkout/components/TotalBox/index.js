import React, { Component } from 'react';

import { Container, Item } from './styles';

export default class TotalBox extends Component {
  render() {
    return(
        <Container>
            <Item index="Produtos" value="R$ 624,80"/>
            <Item index="Frete" value="R$ 5,30"/>
            <Item index="Desconto" value="R$ 30,00" type="discount"/>
            <Item index="Total" value="R$ 600,10" type="total"/>
        </Container>
    );
  }
}
