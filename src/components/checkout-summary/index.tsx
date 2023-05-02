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
    let total = data?.items.reduce((acc: number, item) => acc + item.quantity, 0)

    setTotalItems(total || 0)
  }, [data])

  if (isLoading) {
    return (
      <Paper>
        <div className="flex justify-center items-center">
          <LoadingSpinner className="w-10 h-10" data-testid="loading-spinner" />
        </div>
      </Paper>
    )
  }

  return (
    <aside className="mt-auto p-4 bg-white self-start">
      <div className="flex flex-col gap-1 pb-4 sm:h-full">
        <table className="w-full text-sm lg:text-base text-left text-gray-500 mb-6 sm:flex-1">
          <tbody>
            <tr>
              <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrape">
                Produtos: {!!totalItems && `(${totalItems} ${totalItems < 1 ? 'item' : 'items'})`}
              </th>
              <td className="py-2 text-right text-sm lg:text-base" data-testid="checkout-price">
                {formatCurrency(data?.subTotal)}
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrape">
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
                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrape">
                  Desconto:
                </th>
                <td
                  className="py-2 text-right text-sm lg:text-base font-bold text-brand"
                  data-testid="checkout-discount-price"
                >
                  {formatCurrency(data?.discount)}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900">
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
