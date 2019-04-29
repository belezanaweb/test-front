import React from 'react';

import {
  Title,
  Content,
  Container,
} from './styles';

const Card = (props) => (
  <Container>
    <Title>{props.title}</Title>

    <Content>
      {props.children}
    </Content>
  </Container>
);

export default Card;
