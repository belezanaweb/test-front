import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import Payment from '../../pages/Payment';
import { productMock, productsStorageName } from '../../utils';
import history from '../../services/history';

jest.mock('react-redux');

describe('Payment component', () => {
  beforeEach(() => {
    localStorage.setItem(productsStorageName, JSON.stringify(productMock));
  });

  it('should render payment page', () => {
    const { getByTestId, getByText } = render(<Payment />);

    expect(getByTestId('payment')).toContainElement(getByText('Número do cartão:'));
  });

  it('should submit credit card form', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <HashRouter history={history}>
        <Payment />
      </HashRouter>
    );

    fireEvent.change(getByPlaceholderText('____.____.____.____'), { target: { value: '1111111111111111' } });
    fireEvent.change(getByPlaceholderText('Como no cartão'), { target: { value: 'Diego Chagas' } });
    fireEvent.change(getByPlaceholderText('__/____'), { target: { value: '10/2020' } });
    fireEvent.change(getByPlaceholderText('___'), { target: { value: '333' } });

    fireEvent.submit(getByTestId('payment-form'));

    // expect(history.push).toHaveBeenCalled();

    // expect(window.location.reload).toHaveBeenCalled();
  });

  it('should try to submit credit card form with errors', () => {
    const { getByTestId, getByPlaceholderText } = render(<Payment />);

    fireEvent.change(getByPlaceholderText('____.____.____.____'), { target: { value: '1111' } });
    fireEvent.change(getByPlaceholderText('Como no cartão'), { target: { value: '1' } });
    fireEvent.change(getByPlaceholderText('__/____'), { target: { value: '1' } });
    fireEvent.change(getByPlaceholderText('___'), { target: { value: '11' } });

    fireEvent.submit(getByTestId('payment-form'));

    expect(getByPlaceholderText('____.____.____.____').value).toBe('1111');
  });
});
