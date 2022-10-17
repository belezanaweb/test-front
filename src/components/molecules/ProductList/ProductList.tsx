import { Item } from '../../../interfaces/ProductCart.interface'
import ProductItem from './components/ProductItem/ProductItem'
import * as Styles from './ProductList.styles'

interface ProductListProps {
  items: Item[];
  sizeType: 'big' | 'small';
  showPrice: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  items,
  sizeType,
  showPrice
}: ProductListProps) => {
  return (
    <Styles.Container>
      {items?.map(({ product }) => (
        <ProductItem
          sizeType={sizeType}
          showPrice={showPrice}
          key={product.sku}
          product={product}
        />
      ))}
    </Styles.Container>
  )
}

export default ProductList
