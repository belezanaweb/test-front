import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import * as ProductItemModule from '../../ui/product-item/product-item.component';
import { BagProductList } from './bag-product-list.component';
import { MOCK_BAG } from '../../test/mocks/bag-products.mock';

describe('BagProductList', () => {

  it('renders the title "Products" if hidePrices is true', () => {
    render(<BagProductList bag={MOCK_BAG} hidePrices />);
    expect(screen.getByText('Produtos')).toBeInTheDocument();
  });

  it('does not render title if hidePrices is false', () => {
    render(<BagProductList bag={MOCK_BAG} />);
    expect(screen.queryByText('Produtos')).not.toBeInTheDocument();
  });

  it('renders products correctly', () => {
    const spy = vi.spyOn(ProductItemModule, 'ProductItem').mockImplementation(({ product }) => {
      return <div>{product.name}</div>;
    });

    render(<BagProductList bag={MOCK_BAG} />);

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
    expect(spy).toHaveBeenCalledTimes(2);

    spy.mockRestore();
  });
});
