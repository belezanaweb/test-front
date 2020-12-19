import * as React from 'react';

import { IHeaderProps } from './header.interface';
import * as Styled from './header.styled';

export const Header: React.FC<IHeaderProps> = ({ children }) => <Styled.Header>{children}</Styled.Header>;
