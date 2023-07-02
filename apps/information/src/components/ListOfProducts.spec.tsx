import { render } from '@testing-library/react';

import mockUseCartProvider from '../__mocks__/useCartProvider';
import mockCartData from '../__mocks__/cartData';
import ListOfProducts from './ListOfProducts';

describe('ListOfProducts', () => {
  it('should render successfully', () => {
    const { container } = render(<ListOfProducts />);

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render one list of products', () => {
    mockUseCartProvider.mockImplementation(() => ({
      cart: mockCartData,
    }));

    const { container } = render(<ListOfProducts />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toBeInTheDocument();
  });
});
