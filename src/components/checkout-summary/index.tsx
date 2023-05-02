import React, { useEffect, useState } from 'react'

import { useCartItems } from '@/hooks/use-cart-items'
import { formatCurrency } from '@/lib/format-currency'
import { Paper } from '@/components/ui/paper'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const CheckoutSummary = ({ handleNextStep }: { handleNextStep: React.ReactNode }) => {
  const { data, isLoading } = useCartItems()
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    // calculate total items in the cart
    const total = data?.items.reduce((acc: number, item) => acc + item.quantity, 0)

    setTotalItems(total || 0)
  }, [data])

  if (isLoading) {
    return (
      <Paper>
        <div className="flex items-center justify-center">
          <LoadingSpinner className="h-10 w-10" data-testid="loading-spinner" />
        </div>
      </Paper>
    )
  }

  return (
    <aside className="mt-auto self-start bg-white p-4">
      <div className="flex flex-col gap-1 pb-4 sm:h-full">
        <table className="text-gray-500 mb-6 w-full text-left text-sm sm:flex-1 lg:text-base">
          <tbody>
            <tr>
              <th scope="row" className="text-gray-900 whitespace-nowrape py-2 font-medium">
                Produtos: {!!totalItems && `(${totalItems} ${totalItems < 1 ? 'item' : 'items'})`}
              </th>
              <td className="py-2 text-right text-sm lg:text-base" data-testid="checkout-price">
                {formatCurrency(data?.subTotal)}
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-gray-900 whitespace-nowrape py-2 font-medium">
                Frete:
              </th>
              <td
                className="py-2 text-right text-sm lg:text-base"
                data-testid="checkout-shipping-total"
              >
                {formatCurrency(data?.shippingTotal)}
              </td>
            </tr>
            {data?.discount && (
              <tr>
                <th scope="row" className="text-gray-900 whitespace-nowrape py-2 font-medium">
                  Desconto:
                </th>
                <td
                  className="py-2 text-right text-sm font-bold text-brand lg:text-base"
                  data-testid="checkout-discount-price"
                >
                  {formatCurrency(data?.discount)}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="text-gray-900 font-semibold">
              <th scope="row" className="py-2 text-base">
                Subtotal
              </th>
              <td className="py-2 text-right text-base" data-testid="checkout-subtotal">
                {formatCurrency(data?.total)}
              </td>
            </tr>
          </tfoot>
        </table>

        {handleNextStep}
      </div>
    </aside>
  )
}
