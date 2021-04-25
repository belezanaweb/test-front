import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

test("Cart warns it's empty", () => {
  render(<Cart />);

  expect(screen.getByRole('heading')).toHaveTextContent('Carrinho vazio.');
});

test('Cart displays total and button', async () => {
  await fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('belezanawebCartProducts', JSON.stringify(data));
    });

  render(<Cart />);

  expect(screen.getByRole('button')).toHaveTextContent('SEGUIR PARA O PAGAMENTO');
});
