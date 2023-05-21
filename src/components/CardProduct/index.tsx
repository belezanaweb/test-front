import { ItemShoppingBagFormated } from "../../service/shoppingBagService"

type CardProductProps = {
  products: ItemShoppingBagFormated[],
  showHeader?: boolean,
  showPrices?: boolean, 
}

function cardProductItemPrices(originalPrice: string, maxPrice: string, showPrices: boolean){
  if(!showPrices) return null
  if(originalPrice === maxPrice) return <div>{originalPrice}</div>
  return (
    <div>
      <div>{maxPrice}</div>
      <div>{originalPrice}</div>
    </div>
  )
}

function cardProductItem(product: ItemShoppingBagFormated, showPrices: boolean) {
  return (
    <div key={`cardProductItem${product.sku}`}>
      <div><img src={product.images.thumbnail} alt="Product image" /></div>
      <div>{product.name}</div>
      {cardProductItemPrices(product.originalPrice, product.maxPrice, showPrices)}
    </div>
  )
}

export default function cardProduct({products, showHeader = false, showPrices = false }: CardProductProps) {
  return (
    <div>
      {showHeader && <div>Produtos</div>}
      <div>
        {products.map(product => cardProductItem(product, showPrices))}
      </div>
    </div>
  )
}