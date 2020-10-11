import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CardTotalShipping from '../CardTotalShipping';
import Container from './style';

const InformationShipping = (props) => {
  const { onClick, nameButton, isSubmit } = props;

  return (
    <Container>
      <CardTotalShipping />
      <Button name={nameButton} onClick={onClick} isSubmit={isSubmit} />
    </Container>
  );
};

InformationShipping.propTypes = {
  onClick: PropTypes.func.isRequired,
  nameButton: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
};

InformationShipping.defaultProps = {
  isSubmit: false,
};

export default InformationShipping;
