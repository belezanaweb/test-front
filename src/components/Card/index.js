import React from 'react';
import PropTypes from 'prop-types';
import { Title, Box, Container } from './style';

const Card = (props) => {
  const {
    title, heightBox, children, paddingBox,
  } = props;

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Box height={heightBox} padding={paddingBox}>
        {children}
      </Box>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  heightBox: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  paddingBox: PropTypes.string,
};

Card.defaultProps = {
  paddingBox: '',
};

export default Card;
