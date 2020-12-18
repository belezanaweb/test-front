import * as React from 'react';

import { IPanelProps } from './panel.interface';
import * as Styled from './panel.styled';

export const Panel: React.FC<IPanelProps> = ({ children, title }) => (
  <div>
    {title && title}
    <Styled.Body>{children}</Styled.Body>
  </div>
);
