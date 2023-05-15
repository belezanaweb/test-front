'use client'

import { useGetCartDataUseCase } from '@/core'
import BottomPaymentInformation from '@/core/ui/components/bottom_payment_information'
import { GetCartDataUseCase } from '@/domain'
import Tabs from '@test-front/common-ui/src/components/tabs/Tabs'
import { useMemo } from 'react'
import { CartItemsContainer } from './components'

export type ProductsListPageProps = {
  useCase: GetCartDataUseCase
}

export default function ProductsListPage({ useCase }: ProductsListPageProps) {
  const cartData = useGetCartDataUseCase(useCase)

  const tabsData = useMemo(
    () => [
      {
        title: 'Sacola',
        value: 'bag',
        content: <CartItemsContainer items={cartData.items} />
      },
      {
        title: 'Pagamento',
        value: 'checkout',
        content: <>hello 2</>
      },
      {
        title: 'Confirmação',
        value: 'confirmation',
        content: <>hello 3</>
      }
    ],
    [cartData]
  )

  return (
    <div>
      <Tabs tabs={tabsData} />
      <span className="mt-2"></span>
      <BottomPaymentInformation cartData={cartData} />
    </div>
  )
}
