import { ProductDetail } from '../../services/bag-products/bag-products.services.types';
import "./product-item.styles.css"

export const ProductItem = ({ product, hidePrices }: { product: ProductDetail, hidePrices?: boolean }) => {
  const image = product.imageObjects?.[0]?.small;
  const { maxPrice, price } = product
  const hasDiscount = maxPrice !== price
  return (
    <div key={product.sku} className="item">
      <img src={image} alt={product.name} className="image" />
      <div className="info">
        <span className="name">{product.name}</span>
        {!hidePrices && (
          <div className="priceGroup">
            {hasDiscount && (
              <span className="oldPrice">
                R$ {product.maxPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
        )}
      </div>
    </div>)
};
