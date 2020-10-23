import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Checkout from '../../pages/Checkout';
import { productMock } from '../../utils';
import history from '../../services/history';

jest.mock('react-redux');

describe('Checkout component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render product list', () => {
    useSelector.mockImplementation(callback => callback({
      product: productMock
    }));

    const { getByTestId, getByText } = render(
      <HashRouter history={history}>
        <Checkout />
      </HashRouter>
    );

    expect(getByTestId('checkout')).toContainElement(getByText('R$ 225.90'));
  });

  it('should render spinner', () => {
    useSelector.mockImplementation(callback => callback({
      product: { isLoading: true }
    }));

    const { getByTestId } = render(<Checkout />);

    expect(getByTestId('checkout')).toContainHTML('spinner');
  });
});
