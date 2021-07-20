import React from 'react';
import { render } from '../../../test-utils';
import { CardForm } from './cardForm';
import '@testing-library/jest-dom';

describe('Card Form', () => {
  it('Should render the card form', () => {
    const { getByLabelText } = render(<CardForm />);
    expect(getByLabelText('Número do cartão:')).toHaveProperty('id', 'card-text-field');
    expect(getByLabelText('Nome do Titular:')).toHaveProperty('id', 'name-text-field');
    expect(getByLabelText('Validade (mês/ano):')).toHaveProperty('id', 'val-text-field');
    expect(getByLabelText('CVV:')).toHaveProperty('id', 'cvv-text-field');
  });

  it('Should have correct placeholder values', () => {
    const { getByPlaceholderText } = render(<CardForm />);
    expect(getByPlaceholderText('Como no cartão')).not.toBeNull();
  });

  it('Should have correct mask values', () => {
    const { getByLabelText } = render(<CardForm />);
    expect(getByLabelText('Número do cartão:')).toHaveValue('____.____.____.____');
    expect(getByLabelText('Validade (mês/ano):')).toHaveValue('__/____');
    expect(getByLabelText('CVV:')).toHaveValue('___');
  });
});
