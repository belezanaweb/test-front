import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { standard } from '_theme/styles/themes';

export const customRender = (
  children: React.ReactElement,
  template?: React.ReactElement,
) => {
  const client = new QueryClient();
  return render(
    <ThemeProvider theme={standard}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={template}>
              <Route index path="/" element={children} />
              <Route path="/bag" element={children} />
              <Route path="/payment" element={children} />
              <Route path="/confirmation" element={children} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
