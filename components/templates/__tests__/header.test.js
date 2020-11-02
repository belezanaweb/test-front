import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

it('should render Header', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Sacola') || getByText('Pagamento') || getByText('Confirmação')).toBeInTheDocument();
});