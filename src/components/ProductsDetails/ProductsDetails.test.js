import { render } from '@testing-library/react';
import { useOrder } from '../../hooks';
import ProductsDetails from './ProductsDetails';

jest.mock('../../hooks', () => ({
  useOrder: jest.fn(),
}));

const productListData = [
  {
    imageUrl: 'https://fakeurl.com/image1.jpg',
    productName: 'Product 1',
    price: '10,00',
    maxPrice: '20.00',
  },
  {
    imageUrl: 'https://fakeurl.com/image2.jpg',
    productName: 'Product 2',
    price: '15,00',
    maxPrice: '25.00',
  },
];

describe('<ProductsDetails /> component', () => {
  it('should render without any error', () => {
    useOrder.mockReturnValue({ productListData });
    const { getByText } = render(<ProductsDetails />);

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('R$10,00')).toBeInTheDocument();
    expect(getByText('R$20.00')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('R$15,00')).toBeInTheDocument();
    expect(getByText('R$25.00')).toBeInTheDocument();
  });
});
