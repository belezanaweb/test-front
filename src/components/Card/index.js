import React from 'react';
import PropTypes from 'prop-types';
import { Title, Box, Container } from './style';

const Card = (props) => {
  const {
    title, heightBox, children, paddingBox, gridAreaName,
  } = props;

  return (
    <Container gridArea={gridAreaName}>
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
  gridAreaName: PropTypes.string,
};

Card.defaultProps = {
  paddingBox: '',
  gridAreaName: '',
};

export default Card;
