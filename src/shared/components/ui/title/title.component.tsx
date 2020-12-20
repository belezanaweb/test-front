import * as React from 'react';

import { ITitleProps } from './title.interface';
import * as Styled from './title.styled';

export const Title: React.FC<ITitleProps> = ({ children, tag = 'h1' }) => (
  <Styled.Title as={tag} role="heading">
    {children}
  </Styled.Title>
);
