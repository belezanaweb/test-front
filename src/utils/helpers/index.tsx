// @ts-nocheck
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../../theme';

export const renderWithTheme = (children: ReactNode) => {
    return (
      <ThemeProvider theme={Theme}>
        { children }
      </ThemeProvider>
    )
  }
  