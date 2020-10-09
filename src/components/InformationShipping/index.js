import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CardTotalShipping from '../CardTotalShipping';
import Container from './style';

const InformationShipping = (props) => {
  const { onClick, nameButton } = props;

  return (
    <Container>
      <CardTotalShipping />
      <Button name={nameButton} onClick={onClick} />
    </Container>
  );
};

InformationShipping.propTypes = {
  onClick: PropTypes.func.isRequired,
  nameButton: PropTypes.string.isRequired,
};

export default InformationShipping;
