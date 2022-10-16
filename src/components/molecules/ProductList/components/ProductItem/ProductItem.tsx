import * as Styles from './ProductItem.styles'
import { Product } from '../../../../../interfaces/ProductCart.interface'
import { currencyFormat } from '../../../../../utils/currency'

type ProductItemProps = {
  product: Product,
  sizeType: 'big' | 'small',
  showPrice: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({ product, showPrice, sizeType }: ProductItemProps) => {
  return (
    <Styles.Box sizeType={sizeType} >
      <Styles.ProductImage sizeType={sizeType} src={product.imageObjects[0].medium} alt={product.name} />
      <Styles.Details showPrice={showPrice} >
        <Styles.ProductDescription> {product.name} </Styles.ProductDescription>
        {
          showPrice && <Styles.ProductPrice> {currencyFormat(product.priceSpecification.price)} </Styles.ProductPrice>
        }
      </Styles.Details>
    </Styles.Box>
  )
}

export default ProductItem
