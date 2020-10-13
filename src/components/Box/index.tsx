import React from 'react';
import { Container } from './styles';

const Box: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Box;
