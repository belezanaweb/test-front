/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Tooltip({ title, className, children }: TooltipProps) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
