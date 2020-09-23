import React from 'react';

import { ButtonContainer } from './styles';

const ButtonLink = ({ children, route }) => {
  return <ButtonContainer to={route}>{children}</ButtonContainer>;
};

export default ButtonLink;
