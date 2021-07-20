import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './navbarContainer';
import { MemoryRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('NavBar', () => {
  it('Should render the NavBar', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(getByText('SACOLA')).not.toBeNull();
    expect(getByText('PAGAMENTO')).not.toBeNull();
    expect(getByText('CONFIRMAÇÃO')).not.toBeNull();
  });

  it('Should add the current class according to the route', async () => {
    const { getByText } = render(
      <Router initialEntries={['/']}>
        <Navbar />
      </Router>
    );
    expect(getByText('SACOLA')).toHaveClass('current');
    expect(getByText('PAGAMENTO')).not.toHaveClass('current');
    expect(getByText('CONFIRMAÇÃO')).not.toHaveClass('current');
    act(() => {
      const paymentLink = document.querySelector('#payment-link');
      paymentLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getByText('SACOLA')).not.toHaveClass('current');
    expect(getByText('PAGAMENTO')).toHaveClass('current');
    expect(getByText('CONFIRMAÇÃO')).not.toHaveClass('current');
    act(() => {
      const successLink = document.querySelector('#success-link');
      successLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getByText('SACOLA')).not.toHaveClass('current');
    expect(getByText('PAGAMENTO')).not.toHaveClass('current');
    expect(getByText('CONFIRMAÇÃO')).toHaveClass('current');
  });
});
