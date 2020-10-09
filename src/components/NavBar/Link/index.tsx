import React from 'react';
import { LinkProps, useLocation } from 'react-router-dom';
import { Container } from './styles';

interface Props extends LinkProps {}

const Link: React.FC<Props> = ({ to, ...rest }) => {
  const location = useLocation();

  const mode = location.pathname === to ? 'active' : 'default';

  return <Container to={to} mode={mode} {...rest} />;
};

export default Link;
