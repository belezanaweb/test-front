import { render, screen } from '@testing-library/react';
import { ProductDetail } from '../../services/bag-products/bag-products.services.types';
import { ProductItem } from './product-item.component';

const baseProduct: ProductDetail = {
  sku: '123',
  name: 'Tênis Esportivo',
  price: 199.9,
  maxPrice: 249.9,
  imageObjects: [{
    small: 'http://image.com/image.jpg',
    thumbnail: '',
    medium: '',
    large: '',
    extraLarge: ''
  }],
  slugName: ''
};

describe('ProductItem component', () => {
  it('renders product image, name and prices with discount', () => {
    render(<ProductItem product={baseProduct} />);

    expect(screen.getByAltText('Tênis Esportivo')).toHaveAttribute('src', 'http://image.com/image.jpg');
    expect(screen.getByText('Tênis Esportivo')).toBeInTheDocument();
    expect(screen.getByText('R$ 249,90')).toHaveClass('oldPrice');
    expect(screen.getByText('R$ 199,90')).toHaveClass('price');
  });

  it('does not render old price if there is no discount', () => {
    const productNoDiscount = { ...baseProduct, price: 249.9, maxPrice: 249.9 };
    render(<ProductItem product={productNoDiscount} />);

    expect(screen.getByText('R$ 249,90')).toHaveClass('price');
    expect(screen.queryByText('oldPrice')).not.toBeInTheDocument();
  });

  it('does not render price section when hidePrices is true', () => {
    render(<ProductItem product={baseProduct} hidePrices />);

    expect(screen.queryByText('R$ 199,90')).not.toBeInTheDocument();
    expect(screen.queryByText('R$ 249,90')).not.toBeInTheDocument();
  });

  it('renders fallback when image is missing', () => {
    const productWithoutImage = { ...baseProduct, imageObjects: [] };
    render(<ProductItem product={productWithoutImage} />);


    const image = screen.getByAltText('Tênis Esportivo');
    expect(image).toBeInTheDocument();
    expect(image).not.toHaveAttribute('src', expect.stringContaining('http'));
  });
});
