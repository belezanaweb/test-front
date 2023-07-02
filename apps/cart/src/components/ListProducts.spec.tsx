import { BrowserRouter } from 'react-router-dom';

import { render, waitFor, fireEvent } from '@testing-library/react';

import mockCartData from '../__mocks__/cartData';
import mockUseCartProvider from '../__mocks__/useCartProvider';
import ListProducts from './ListProducts';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ListProducts', () => {
  it('should render the products list', () => {
    const { container } = render(
      <BrowserRouter>
        <ListProducts />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render one list of products', async () => {
    mockUseCartProvider.mockImplementation(() => ({
      cart: mockCartData,
    }));

    const { container } = render(
      <BrowserRouter>
        <ListProducts />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot();
      expect(container).toBeInTheDocument();
    });
  });

  it('should call handleGoNextStep when the button is clicked', async () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ListProducts />
      </BrowserRouter>,
    );

    const nextStepButton = getByText('Seguir para o pagamento');

    fireEvent.click(nextStepButton);

    await waitFor(() => {
      expect(container).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/payment');
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
