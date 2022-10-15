import * as Styles from './ProductPrices.styles'
import { ProductCart } from '../../../interfaces/ProductCart.interface'
import PriceItem from './components/PriceItem/PriceItem'

type ProductPricesProps = {
  productCart: ProductCart
}

const ProductPrices: React.FC<ProductPricesProps> = ({ productCart }: ProductPricesProps) => {
  return (
    <Styles.Container>
      <PriceItem description="produtos" price={productCart.subTotal} />
      <PriceItem description="frete" price={productCart.shippingTotal} />
      <PriceItem description="desconto" isDiscount={true} price={productCart.discount} />
      <PriceItem description="total" isTotal={true} price={productCart.total} />
    </Styles.Container>
  )
}

export default ProductPrices
