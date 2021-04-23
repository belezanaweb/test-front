import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

test("Cart warns it's empty", () => {
  render(<Cart products={[]} />);

  expect(screen.getByRole('heading')).toHaveTextContent('Carrinho vazio.');
});
