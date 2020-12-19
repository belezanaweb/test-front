import * as React from 'react';

import { IVerticalSpacingProps } from './vertical-spacing.interface';
import * as Styled from './vertical-spacing.styled';

export const VerticalSpacing: React.FC<IVerticalSpacingProps> = ({ children, size = 'medium', top, bottom }) => (
  <Styled.VerticalSpacing size={size} top={top} bottom={bottom}>
    {children}
  </Styled.VerticalSpacing>
);
