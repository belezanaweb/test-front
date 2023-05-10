import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './styles/global';
import { standard } from './styles/themes';

const Theme: React.FC<React.PropsWithChildren> = ({ children }): React.ReactElement => (
  <ThemeProvider theme={standard}>
    <Global />
    {children}
  </ThemeProvider>
);

export default Theme;
