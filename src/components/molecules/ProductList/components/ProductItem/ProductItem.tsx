import * as Styles from './ProductItem.styles'
import { Product } from '../../../../../interfaces/ProductCart.interface'
import { currencyFormat } from '../../../../../utils/currency'

type ProductItemProps = {
  product: Product,
  sizeType: 'big' | 'small',
  showPrice: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({ product }: ProductItemProps) => {
  return (
    <Styles.Box>
      <Styles.ProductImage src={product.imageObjects[0].thumbnail} alt={product.name} />
      <Styles.Details>
        <Styles.ProductDescription> {product.name} </Styles.ProductDescription>
        <Styles.ProductPrice> {currencyFormat(product.priceSpecification.price)} </Styles.ProductPrice>
      </Styles.Details>
    </Styles.Box>
  )
}

export default ProductItem
