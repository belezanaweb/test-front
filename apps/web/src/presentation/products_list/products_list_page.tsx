'use client'

import { useGetCartDataUseCase } from '@/core'
import BottomPaymentInformation from '@/core/ui/components/bottom_payment_information'
import { GetCartDataUseCase } from '@/domain'
import { TabContent } from '@test-front/common-ui/src/components/tabs'
import Tabs from '@test-front/common-ui/src/components/tabs/Tabs'
import { useMemo } from 'react'
import { Confirmation } from '../confirmation'
import PaymentForm from '../payment_form/PaymentForm'
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
        value: 'bag'
      },
      {
        title: 'Pagamento',
        value: 'checkout'
      },
      {
        title: 'Confirmação',
        value: 'confirmation'
      }
    ],
    []
  )

  return (
    <div className="bg-gray-100">
      {cartData?.items?.length && (
        <>
          <Tabs tabs={tabsData}>
            <TabContent keyValue="bag">
              {cartData?.items?.length && <CartItemsContainer items={cartData.items} />}
            </TabContent>

            <TabContent keyValue="checkout">
              <PaymentForm />
            </TabContent>

            <TabContent keyValue="confirmation">
              {cartData?.items?.length && <Confirmation items={cartData.items} />}
            </TabContent>
          </Tabs>

          <BottomPaymentInformation cartData={cartData} />
        </>
      )}
    </div>
  )
}
