import { useFetchCart } from '@/hooks'
import { Card } from '../card'
import { CartProductItem } from '../cart-product-item'
import { Skeleton } from 'ui'

export function CartTab() {
  const { data, isLoading } = useFetchCart()

  if (isLoading) {
    return (
      <Card className="gap-4 px-2 py-2">
        <Skeleton className="h-10 first:mt-4 last:mb-4" quantity={3} />
      </Card>
    )
  }

  return (
    <Card className="gap-8">
      {data?.items.map((item, i) => {
        const showMaxPrice =
          item.product.priceSpecification.maxPrice !== item.product.priceSpecification.price

        return (
          <CartProductItem.Root key={i}>
            <CartProductItem.Info
              description={item.product.name}
              imgSrc={item.product.imageObjects[0].small}
            />
            <CartProductItem.Price
              price={item.product.priceSpecification.price}
              maxPrice={showMaxPrice && item.product.priceSpecification.maxPrice}
            />
          </CartProductItem.Root>
        )
      })}
    </Card>
  )
}
