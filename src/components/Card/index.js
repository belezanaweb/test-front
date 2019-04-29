import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Title,
  Content,
  Container,
} from './styles';

const getTitle = (title) => {
  if (!title) {
    return null;
  }

  return (
    <Title>{title}</Title>
  );
}

const Card = (props) => (
  <Container>
    {getTitle(props.title)}

    <Content>
      {props.children}
    </Content>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Card;
