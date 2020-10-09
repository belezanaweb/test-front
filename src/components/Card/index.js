import React from 'react';
import PropTypes from 'prop-types';
import { Title, Box, Container } from './style';

const Card = (props) => {
  const { title, heightBox, children } = props;

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Box height={heightBox}>
        {children}
      </Box>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  heightBox: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
