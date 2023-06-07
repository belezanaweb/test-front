import { render, screen, act } from '@testing-library/react';
import { useCheckoutContext } from '../../contexts';
import { validateForm } from './utils';
import PaymentForm from './PaymentForm';
import { checkoutTabs } from '../../enums/checkoutTabs';

const { CONFIRMATION_TAB } = checkoutTabs;

jest.mock('../../contexts');

jest.mock('../shared/Input', () => ({
  __esModule: true,
  default: jest.fn(() => <input data-testid="input" />),
}));

jest.mock('./utils');

describe('<PaymentForm />', () => {
  let setCurrentTab;
  beforeEach(() => {
    setCurrentTab = jest.fn();
    useCheckoutContext.mockReturnValue({
      setCurrentTab,
      setPaymentInfo: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without any error', () => {
    render(<PaymentForm />);
    expect(screen.getByTestId('payment-form')).toBeInTheDocument();
  });

  it('should submit form when has no errors', () => {
    validateForm.mockReturnValue({});
    render(<PaymentForm />);
    const form = screen.getByTestId('payment-form');

    act(() => form.submit());
    expect(setCurrentTab).toBeCalledWith(CONFIRMATION_TAB);
  });

  it('should not submit form when fields are invalid', () => {
    validateForm.mockReturnValue({
      cardNumber: 'Número do cartão inválido',
      cardHolderName: 'Nome do titular inválido',
      expirationDate: 'Data de validade inválida',
      cvv: 'CVV inválido',
    });

    render(<PaymentForm />);
    const form = screen.getByTestId('payment-form');

    act(() => form.submit());
    expect(setCurrentTab).not.toBeCalled();
  });
});
