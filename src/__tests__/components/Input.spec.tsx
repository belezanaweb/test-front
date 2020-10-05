import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from 'components/Input';

describe('Input Component', () => {
  it('sould be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input
        label="Insira seu nome"
        placeholder="Nome"
        register={jest.fn()}
      />
    );

    const inputElement = getByPlaceholderText('Nome');

    expect(inputElement).toBeTruthy();
  });

  it('sould be able to show an error', () => {
    const { getByTestId } = render(
      <Input
        label="Insira seu nome"
        placeholder="Nome"
        error="Nome inválido"
        register={jest.fn()}
      />
    );

    const errorElement = getByTestId('input-error');

    expect(errorElement).toBeTruthy();
  });
});
