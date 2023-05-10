import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { standard } from '../src/theme/styles/themes';

export const renderWithTheme = (children: React.ReactElement) => {
  return render(<ThemeProvider theme={standard}>{children}</ThemeProvider>);
};

export const renderWithQueryClientProvider = (children: React.ReactElement) => {
  const client = new QueryClient();
  return render(<QueryClientProvider client={client}>{children}</QueryClientProvider>);
};
