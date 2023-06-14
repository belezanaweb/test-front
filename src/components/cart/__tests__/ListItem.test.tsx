import { render } from '@testing-library/react';
import { ListItem } from '../ListItem';

// Mock do helper NumberFormat
vi.mock('../../helpers/numberFormat', () => ({
  NumberFormat: vi.fn((value) => `R$ ${value.toFixed(2)}`),
}));

describe('ListItem', () => {
  it('renders correctly with item details', () => {
    const item = {
      name: 'Product Name',
      image: 'product.jpg',
      price: 9.99,
      oldPrice: 14.99,
    };

    const { getByAltText, getByText } = render(<ListItem {...item} />);

    const productImage = getByAltText(item.name);
    const productName = getByText(item.name);
    const productPrice = getByText(`R$ ${item.price.toFixed(2).replace('.', ',')}`);
    const productOldPrice = getByText(`R$ ${item.oldPrice.toFixed(2).replace('.', ',')}`);

    expect(productImage).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productOldPrice).toBeInTheDocument();
  });

  it('does not render old price if it is the same as the current price', () => {
    const item = {
      name: 'Product Name',
      image: 'product.jpg',
      price: 9.99,
      oldPrice: 9.99,
    };

    const { queryByText } = render(<ListItem {...item} />);

    const productOldPrice = queryByText(`R$ ${item.oldPrice.toFixed(2)}`);

    expect(productOldPrice).not.toBeInTheDocument();
  });
});
