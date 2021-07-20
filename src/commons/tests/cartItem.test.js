import React from 'react';
import { render } from '@testing-library/react';
import { CartItem } from '../cartItem';

describe('Cart Item', () => {
  it('Should render the cart item', async () => {
    const { getByText, getByAltText } = render(
      <CartItem name="Produto Teste" src={15} price={20.6} />
    );
    expect(getByAltText('Produto Teste')).toHaveClass('image');
    expect(getByText('Produto Teste')).toHaveClass('name');
    expect(getByText('R$ 20,60')).toHaveClass('price');
  });
});
