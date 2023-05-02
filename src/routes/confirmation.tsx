import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CheckoutSummary } from '@/components/checkout-summary'
import { ProductItem } from '@/components/product-item'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Paper } from '@/components/ui/paper'
import { useCartItems } from '@/hooks/use-cart-items'
import { useCheckoutStore } from '@/store/use-checkout'
import { maskCardNumber } from '@/lib/utils'

export const ConfirmationPage = () => {
  const store = useCheckoutStore()
  const { data, isLoading } = useCartItems()
  const navigate = useNavigate()

  useEffect(() => {
    if (!store.cartId) {
      navigate('/payment')
    }
  }, [store, navigate])

  const handleClick = () => {
    store.clearPaymentData()

    navigate('/')
  }

  if (isLoading) {
    return (
      <Paper>
        <div className="flex items-center justify-center">
          <LoadingSpinner className="h-10 w-10" />
        </div>
      </Paper>
    )
  }

  return (
    <div className="space-y-5">
      <Paper>
        <div className="flex flex-col justify-center gap-2 py-3 text-center">
          <h2 className="text-[22px] leading-7 text-black">Compra efetuada com sucesso</h2>
          <p className="text-base text-gray-dark">{maskCardNumber(store.cartNumber)}</p>
          <p className="text-base text-gray-dark">{store.cartOwnerName}</p>
          <p className="text-base text-gray-dark">{store.cartExpirationDate}</p>
        </div>
      </Paper>

      <div className="grid space-y-5 sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
        <Paper className="col-span-1 lg:col-span-2" title="Produtos">
          <div className="flex flex-col gap-10 py-6">
            {data?.items.map((item, index) => (
              <ProductItem key={index} product={item.product} />
            ))}
          </div>
        </Paper>
        <CheckoutSummary
          handleNextStep={
            <Button variant="dark" onClick={handleClick}>
              Voltar ao início do protótipo
            </Button>
          }
        />
      </div>
    </div>
  )
}
