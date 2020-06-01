import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import CreditCardData from './CreditCardData';

afterEach(function() {
  cleanup();
});

describe('<CreditCardData />', () => {
  it('should render CreditCardData with data.', () => {
    const data = {
      expiringDate: '10/2020',
      name: 'John Joe',
      number: '4305',
    };

    provider(<CreditCardData {...data} />, render);

    expect(screen
      .getByLabelText('expiring date'))
      .toHaveTextContent(data.expiringDate);

    expect(screen
      .getByLabelText('name'))
      .toHaveTextContent(data.name.toUpperCase());

    expect(screen
      .getByLabelText('card number'))
      .toHaveTextContent(`****.****.****.${data.number}`);
  });
});
