import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { ResumeProvider } from 'context/resume';
import { PaymentProvider } from 'context/payment';

import Payment from 'pages/Payment';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
      location: {
        pathname: '/payment'
      }
    }),
  }
});

describe('Payment Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to finish payment', async () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText } = render(
      <ResumeProvider>
        <PaymentProvider>
          <Router history={history}>
            <Route component={Payment} />
          </Router>
        </PaymentProvider>
      </ResumeProvider>
    );

    const cardNumberInput = getByPlaceholderText('____.____.____.____');
    const cardNameInput = getByPlaceholderText('Como no cartão');
    const cardValityInput = getByPlaceholderText('__/____');
    const cardSecurityNumberInput = getByPlaceholderText('___');
    const buttonElement = getByText('FINALIZAR O PEDIDO');

    fireEvent.change(cardNumberInput, { target: { value: '2112 3312 1231 2313' } });
    fireEvent.change(cardNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(cardValityInput, { target: { value: '05/2025' } });
    fireEvent.change(cardSecurityNumberInput, { target: { value: '123' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);

      expect(mockedHistoryPush).toHaveBeenCalledWith('/success');
    });
  });
});
