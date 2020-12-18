import * as React from 'react';

import { IGridProps } from './grid.interface';
import * as Styled from './grid.styled';

export const Grid: React.FC<IGridProps> = ({ children }) => <Styled.Grid>{children}</Styled.Grid>;
