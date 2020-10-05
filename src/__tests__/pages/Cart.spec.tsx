import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { ResumeProvider } from 'context/resume';

import Cart from 'pages/Cart';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
      location: {
        pathname: '/cart'
      }
    }),
  }
});

describe('Cart Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('sould be able to go to payment page', async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <ResumeProvider>
        <Router history={history}>
          <Route component={Cart} />
        </Router>
      </ResumeProvider>
    );

    setTimeout(() => {
      const buttonElement = getByText('SEGUIR PARA O PAGAMENTO');

      fireEvent.click(buttonElement);

      expect(mockedHistoryPush).toHaveBeenCalledWith('/payment')
    }, 5000);
  });
});
