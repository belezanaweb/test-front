import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Title,
  Content,
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
  <div>
    {getTitle(props.title)}

    <Content>
      {props.children}
    </Content>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Card;
