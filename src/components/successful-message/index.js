import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Check from './check.png';

const Container = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
`;

const CheckImage = styled.img`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;

  display: inline-block;
  width: 40px;
  height: 40px;
  object-fit: none;
`;

const Message = styled.span`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;

  font-weight: ${props => props.theme.fonts.weights.bold};
  font-size: 0.875rem;
  margin-top: 0.5rem;

  display: inline-block;
`;

const SucessfulMessage = function({ children }) {
  return (
    <Container>
      <CheckImage src={Check} />
      <br />
      <Message>{children}</Message>
    </Container>
  );
};

SucessfulMessage.propTypes = PropTypes.shape({
  children: PropTypes.node.isRequired
});

export default SucessfulMessage;
