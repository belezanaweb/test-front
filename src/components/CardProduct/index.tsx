import { ItemShoppingBagFormated } from "../../service/shoppingBagService"
import { Container, ContainerProduct, MaxPrice, PriceOriginal, ProductDescritpion } from "./cardProduct.style"

type CardProductProps = {
  products: ItemShoppingBagFormated[],
  showHeader?: boolean,
  showPrices?: boolean, 
}

function cardProductItemPrices(originalPrice: string, maxPrice: string, showPrices: boolean){
  if(!showPrices) return null
  if(originalPrice === maxPrice) return <PriceOriginal>{originalPrice}</PriceOriginal>
  return (
    <div>
      <MaxPrice>{maxPrice}</MaxPrice>
      <PriceOriginal>{originalPrice}</PriceOriginal>
    </div>
  )
}

function cardProductItem(product: ItemShoppingBagFormated, showPrices: boolean) {
  return (
    <ContainerProduct key={`cardProductItem${product.sku}`}>
      <div><img src={product.images.thumbnail} alt="Product image" /></div>
      <ProductDescritpion>{product.name}</ProductDescritpion>
      {cardProductItemPrices(product.originalPrice, product.maxPrice, showPrices)}
    </ContainerProduct>
  )
}

export default function cardProduct({products, showHeader = false, showPrices = false }: CardProductProps) {
  return (
    <Container>
      {showHeader && <div>Produtos</div>}
      <div>
        {products.map(product => cardProductItem(product, showPrices))}
      </div>
    </Container>
  )
}