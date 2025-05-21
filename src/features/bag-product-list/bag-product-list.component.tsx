import { BagProductResponse } from '../../services';
import { ProductItem } from '../../ui';
import './bag-product-list.styles.css';

interface BagProductListProps {
  bag: BagProductResponse;
  hidePrices?: boolean
}

export const BagProductList: React.FC<BagProductListProps> = ({ bag, hidePrices }: BagProductListProps) => {
  return (
      <div className="bag-product-list">
        {hidePrices && <h2 className="title">Produtos</h2>}
        {bag.items.map((item) => (
          <ProductItem key={item.product.sku} product={item.product} hidePrices={hidePrices} />
        ))}
      </div>
  );
}
