import { queryByText, render } from '@testing-library/react';

import mockUseCartProvider from '../__mocks__/useCartProvider';
import mockObfuscateCreditCardNumber from '../__mocks__/obfuscateCreditCardNumber';
import SuccessfullyPaymentCard from './SuccessfullyPaymentCard';

describe('SuccessfullyPaymentCard', () => {
  it('should render successfully', () => {
    const { container } = render(<SuccessfullyPaymentCard />);

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render card details successfully', () => {
    mockUseCartProvider.mockImplementation(() => ({
      creditCard: {
        number: '1234123412341234',
        holder: 'John Doe',
        expireDate: '12/2021',
        cvv: '123',
      },
    }));

    mockObfuscateCreditCardNumber.mockImplementation(
      () => '****.****.****.1234',
    );

    const { container } = render(<SuccessfullyPaymentCard />);
    const getByText = (text: string) => queryByText(container, text);

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Compra efetuada com sucesso')).toBeInTheDocument();
    expect(getByText('****.****.****.1234')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('12/2021')).toBeInTheDocument();
    expect(getByText('123')).not.toBeInTheDocument();
  });
});
