import Product from '~/components/Product';

import { formatToCurrency } from '~/utils/format-currency';

const products = [
  {
    title: 'product 1',
    image: 'image 1',
    price: 10
  },
  {
    title: 'product 2',
    image: 'image 2',
    price: 20
  },
  {
    title: 'product 3',
    image: 'image 3',
    price: 30
  }
];

const [firstProduct] = products;

jest.mock('~/utils/format-currency', () => ({
  formatToCurrency: jest.fn()
}));

describe('Product Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Product, {
      props: {
        ...firstProduct
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should call `formatToCurrency` to format price', () => {
    getStyledWrapper(Product, {
      props: {
        ...firstProduct
      }
    });

    expect(formatToCurrency).toHaveBeenCalled();
  });
});
