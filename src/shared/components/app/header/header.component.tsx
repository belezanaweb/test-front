import * as React from 'react';

import { IHeaderProps } from './header.interface';

export const Header: React.FC<IHeaderProps> = ({ children }) => <header>{children}</header>;
