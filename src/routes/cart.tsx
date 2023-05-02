import { Link } from 'react-router-dom'

import { CheckoutSummary } from '@/components/checkout-summary'
import { Button } from '@/components/ui/button'
import { Paper } from '@/components/ui/paper'
import { ProductItem } from '@/components/product-item'
import { useCartItems } from '@/hooks/use-cart-items'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const CartPage = () => {
  const { data, isLoading } = useCartItems()

  if (isLoading) {
    return (
      <Paper>
        <div className="flex justify-center items-center">
          <LoadingSpinner className="w-10 h-10" />
        </div>
      </Paper>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 space-y-5 sm:space-y-0">
      <Paper className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-10 py-6">
          {data?.items.map((item, index) => (
            <ProductItem key={index} product={item.product} />
          ))}
        </div>
      </Paper>
      <CheckoutSummary
        handleNextStep={
          <Link to="/payment">
            <Button>Seguir para o pagamento</Button>
          </Link>
        }
      />
    </div>
  )
}
