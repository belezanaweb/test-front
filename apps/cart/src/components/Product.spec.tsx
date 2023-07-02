import { render } from '@testing-library/react';

import Product from './Product';

describe('Product', () => {
  const product = {
    image: 'image.jpg',
    description: 'Product description',
    price: 10,
    discount: 2,
    maxPrice: 12,
  };

  it('should render the product with discounted price', () => {
    const { container, getByText, queryByText } = render(
      <Product {...product} hiddenPrices={false} />,
    );

    const descriptionElement = getByText('Product description');
    const originalPriceElement = queryByText('R$ 12,00');
    const discountedPriceElement = getByText('R$ 10,00');

    expect(descriptionElement).toBeInTheDocument();
    expect(originalPriceElement).toBeInTheDocument();
    expect(discountedPriceElement).toBeInTheDocument();
    expect(originalPriceElement).toHaveClass('line-through');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the product without discounted price', () => {
    const { container, getByText, queryByText } = render(
      <Product {...product} discount={0} hiddenPrices={false} />,
    );

    const descriptionElement = getByText('Product description');
    const originalPriceElement = queryByText('R$ 12,00');
    const discountedPriceElement = queryByText('R$ 10,00');

    expect(descriptionElement).toBeInTheDocument();
    expect(originalPriceElement).not.toBeInTheDocument();
    expect(discountedPriceElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the product with hidden prices', () => {
    const { container, getByText, queryByText } = render(
      <Product {...product} hiddenPrices />,
    );

    const descriptionElement = getByText('Product description');
    const originalPriceElement = queryByText('R$ 12,00');
    const discountedPriceElement = queryByText('R$ 10,00');

    expect(descriptionElement).toBeInTheDocument();
    expect(originalPriceElement).not.toBeInTheDocument();
    expect(discountedPriceElement).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
