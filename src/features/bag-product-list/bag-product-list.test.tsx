import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import * as ProductItemModule from '../../ui/product-item/product-item.component';
import { BagProductList } from './bag-product-list.component';
import { MOCK_BAG } from '../../test/mocks/bag-products.mock';

describe('BagProductList', () => {

  it('renderiza o título "Produtos" se hidePrices for true', () => {
    render(<BagProductList bag={MOCK_BAG} hidePrices />);
    expect(screen.getByText('Produtos')).toBeInTheDocument();
  });

  it('não renderiza o título se hidePrices for false', () => {
    render(<BagProductList bag={MOCK_BAG} />);
    expect(screen.queryByText('Produtos')).not.toBeInTheDocument();
  });

  it('renderiza os produtos corretamente', () => {
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
