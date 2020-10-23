import React from 'react';
import { render } from '@testing-library/react';

import Success from '../../pages/Success';
import { creditCardMock, creditCardStorageName, productMock, productsStorageName } from '../../utils';

jest.mock('react-redux');

describe('Success component', () => {
  beforeEach(() => {
    localStorage.setItem(creditCardStorageName, JSON.stringify(creditCardMock));
    localStorage.setItem(productsStorageName, JSON.stringify(productMock));
  });

  it('should render success page', () => {
    const { getByTestId, getByText } = render(<Success />);

    expect(getByTestId('success')).toContainElement(getByText('Diego Chagas'));
  });
});
