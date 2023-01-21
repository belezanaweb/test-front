import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Theme } from '../../theme';
import { PaymentForm } from './index';
import { useForm } from '../../services/hooks/form/useForm';

vi.mock('../../../services/hooks/form/useForm');

describe('PaymentForm component tests', () => {
  it('should render PaymentForm component without error', () => {
    const { getByText } = render(
      <Theme>
        <PaymentForm isFormTriggered={false} handleFormDataChange={vi.fn()} />
      </Theme>
    );

    const linkElement = getByText('CVV:');
    expect(linkElement).toBeInTheDocument();
  });

  it('should fill all inputs', () => {
    const { getAllByRole } = render(
      <Theme>
        <PaymentForm isFormTriggered={true} handleFormDataChange={vi.fn()} ref={{ current: {
          cardNumber: undefined,
          cardName: undefined,
          cardValidThrough: undefined,
          cardCVV: undefined
        }}} />
      </Theme>
    );

    const element0 = getAllByRole('textbox')[0];
    const element1 = getAllByRole('textbox')[1];
    const element2 = getAllByRole('textbox')[2];
    const element3 = getAllByRole('textbox')[3];

    fireEvent.change(element0, {target: {value: '1234567890123456'}});
    fireEvent.blur(element0);
    fireEvent.change(element1, {target: {value: 'Card Name'}});
    fireEvent.blur(element1);
    fireEvent.change(element2, {target: {value: '122030'}});
    fireEvent.blur(element2);
    fireEvent.change(element3, {target: {value: '123'}});
    fireEvent.blur(element3);

    expect(element0).toHaveValue('1234.5678.9012.3456');
    expect(element1).toHaveValue('Card Name');
    expect(element2).toHaveValue('12/2030');
    expect(element3).toHaveValue('123');
  });
});
