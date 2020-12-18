import * as React from 'react';

import { IGridColProps } from './grid.interface';
import * as Styled from './grid.styled';

export const GridCol: React.FC<IGridColProps> = ({ children, xs = 12, md, lg, xsOffset, mdOffset, lgOffset }) => (
  <Styled.GridCol xs={xs} md={md} lg={lg} xsOffset={xsOffset} mdOffset={mdOffset} lgOffset={lgOffset}>
    {children}
  </Styled.GridCol>
);
