import React from 'react';

import { Container } from './styles';

const ButtonLink = ({ children, route }) => {
  return <Container to={route}>{children}</Container>;
};

export default ButtonLink;
