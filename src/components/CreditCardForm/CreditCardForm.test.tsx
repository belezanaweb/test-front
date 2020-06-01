import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import CreditCardForm from './CreditCardForm';
import CreditCardFormController from './CreditCardFormController';

afterEach(function() {
  cleanup();
});

describe('<CreditCardForm />', () => {
  it('should render CreditCardForm', () => {
    const data = {
      code: '309',
      expiringDate: '10/2020',
      name: 'John Joe',
      number: '5507.6695.7339.8053',
    };

    const handleSubmit = () => {};

    provider((
      <CreditCardFormController onSubmit={handleSubmit}>
        {() => (
          <CreditCardForm />
        )}
      </CreditCardFormController>
    ), render);

    fireEvent.change(
      screen.getByLabelText('card number'),
      {
        target: { value: data.number.replace(/\./gi, '') }
      },
    );

    fireEvent.change(screen.getByLabelText('name'), { target: { value: data.name } });

    fireEvent.change(
      screen.getByLabelText('expiring date'),
      {
        target: { value: data.expiringDate.replace('/', '') } 
      }
    );

    fireEvent.change(screen.getByLabelText('code verification'), { target: { value: data.code } });

    // getByPlaceholderText
    expect(screen.getByLabelText('card number')).toHaveValue(data.number);
    expect(screen.getByLabelText('name')).toHaveValue(data.name);
    expect(screen.getByLabelText('expiring date')).toHaveValue(data.expiringDate);
    expect(screen.getByLabelText('code verification')).toHaveValue(data.code);
  });

  it(`should be an empty component if don't exist context`, () => {
    const { container } = provider(<CreditCardForm />, render);

    expect(container).toBeEmpty();
  });

  // TODO: when has a error should change border style input and show message error.
  // TODO: when has a error block submit.
});
