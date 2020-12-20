import * as React from 'react';

import { IMainProps } from './main.interface';
import * as Styled from './main.styled';

export const Main: React.FC<IMainProps> = ({ children }) => <Styled.Main>{children}</Styled.Main>;
