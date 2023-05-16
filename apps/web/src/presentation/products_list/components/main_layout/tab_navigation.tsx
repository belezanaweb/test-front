import BottomPaymentInformation from '@/core/ui/components/bottom_payment_information'
import { CartModel } from '@/domain'
import Confirmation from '@/presentation/confirmation/Confirmation'
import { PaymentFormProvider } from '@/presentation/payment_form'
import PaymentForm from '@/presentation/payment_form/PaymentForm'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { useCallback, useMemo, useState } from 'react'
import { CartItemsContainer } from '../cart_item/cart_items_container'

import { CartInfoButton, CartTabKeysType } from '../card_info_button/card_info_button'
import MainContainer from './main_container'

type TabsPrimitiveCompProps = {
  cartData: CartModel
}

export function TabNavigation({ cartData }: TabsPrimitiveCompProps) {
  const [tabKey, setTabKey] = useState<CartTabKeysType>('bag')

  const tabsData = useMemo(
    () => [
      {
        title: 'Sacola',
        value: 'bag'
      },
      {
        title: 'Pagamento',
        value: 'payment'
      },
      {
        title: 'Confirmação',
        value: 'confirmation'
      }
    ],
    []
  )

  const onChangeTab = useCallback((tabKey: CartTabKeysType) => {
    setTabKey(tabKey)
  }, [])

  return (
    <MainContainer>
      <PaymentFormProvider>
        <TabsPrimitive.Root defaultValue="bag" value={tabKey}>
          <TabsPrimitive.List className="mb-5 flex w-full items-center justify-center bg-white shadow-md md:rounded">
            {tabsData.map(({ title, value }) => (
              <TabsPrimitive.Trigger
                key={`tab-trigger-${value}`}
                value={value}
                className="radix-state-active:border-b-black radix-state-active:border-b-4 relative border-b border-b-gray-200 p-3 text-sm disabled:cursor-not-allowed disabled:text-neutral-500">
                <span className="radix-state-active:text-black radix-state-inactive:text-gray-200 text-sm font-normal">
                  {title}
                </span>
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          <TabsPrimitive.Content
            key="tab-content-bag"
            value="bag"
            className="mx-2 my-5 rounded-b-lg bg-white"
          >
            {cartData?.items?.length && <CartItemsContainer items={cartData.items} />}
          </TabsPrimitive.Content>

          <TabsPrimitive.Content
            key="tab-content-payment"
            value="payment"
            className="mx-2 my-5 rounded-b-lg bg-white"
          >
            <PaymentForm />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content
            key="tab-content-confirmation"
            value="confirmation"
            className="mx-2 my-5 rounded-b-lg bg-white"
          >
            <Confirmation items={cartData.items}/>
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>

        <BottomPaymentInformation cartData={cartData}>
          <CartInfoButton tabKey={tabKey} onCallToAction={onChangeTab} />
        </BottomPaymentInformation>
      </PaymentFormProvider>
    </MainContainer>
  )
}
