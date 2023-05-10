import Card from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';
import { mock } from '_test/mock';

describe('Components :: Card', () => {
  it('should be render with basic data', () => {
    const product = mock.items[0].product;
    customRender(<Card {...product} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', product.imageObjects[0].small);

    const name = screen.getByText(product.name);
    expect(name).toBeInTheDocument();
  });

  it('should be render price and discount', () => {
    const product = mock.items[0].product;
    customRender(<Card showValues {...product} />);

    const price = screen.getByText(/R\$ 100,00/i);
    expect(price).toBeInTheDocument();

    const discount = screen.getByText(/R\$ 200,00/i);
    expect(discount).toBeInTheDocument();
  });

  it('should be render price without discount', () => {
    const product = mock.items[0].product;
    const custom = Object.assign(product, { priceSpecification: {
      ...product.priceSpecification,
      discount: 0,
    }});
    customRender(<Card showValues {...custom} />);

    const price = screen.getByText(/R\$ 100,00/i);
    expect(price).toBeInTheDocument();
  });
});
