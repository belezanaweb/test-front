import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import theme from '../../theme';

import Total from './Total';

afterEach(function() {
  cleanup();
});

describe('<Total />', () => {
  const data = {
    discount: 30,
    shippingTotal: 5.3,
    subTotal: 624.8,
    total: 618.9
  };

  it('should not render when data is empty.', () => {
    const { container } = provider(<Total data={null} />, render);

    expect(container).toBeEmpty();
  });

  it('should render sub total.', () => {
    provider(<Total data={data} />, render);

    expect(screen
      .getByLabelText('Produtos'))
      .toHaveTextContent('R$ 624,80');
  });

  it('should render shipping total.', () => {
    provider(<Total data={data} />, render);

    expect(screen
      .getByLabelText('Frete'))
      .toHaveTextContent('R$ 5,30');
  });

  it('should render discount with highlight color.', () => {
    provider(<Total data={data} />, render);

    expect(screen
      .getByLabelText('Desconto'))
      .toHaveTextContent('-R$ 30,00');

    expect(screen
      .getByLabelText('Desconto'))
      .toHaveStyleRule('color', theme.colors.primaryLight);
  });

  it('should render total.', () => {
    provider(<Total data={data} />, render);

    expect(screen
      .getByLabelText('Total'))
      .toHaveTextContent('R$ 618,90');
  });
});
