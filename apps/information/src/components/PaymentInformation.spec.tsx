import { BrowserRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import mockCartData from '../__mocks__/cartData';
import mockUseCartProvider from '../__mocks__/useCartProvider';
import PaymentInformation from './PaymentInformation';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('PaymentInformation', () => {
  it('should render successfully', () => {
    const { container } = render(
      <BrowserRouter>
        <PaymentInformation />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render successfully when cart exists', () => {
    mockUseCartProvider.mockImplementation(() => ({
      cart: mockCartData,
    }));

    const { container } = render(
      <BrowserRouter>
        <PaymentInformation />
      </BrowserRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toBeInTheDocument();
  });

  it('should navigate to cart on button click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <PaymentInformation />
      </BrowserRouter>,
    );

    const backButton = getByText('Voltar ao inicio do protótipo');
    fireEvent.click(backButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/cart');
  });
});
