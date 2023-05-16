import BottomPaymentInformation from '@/core/ui/components/bottom_payment_information'
import { CartModel } from '@/domain'
import Confirmation from '@/presentation/confirmation/Confirmation'
import PaymentForm, { PaymentFormProvider } from '@/presentation/payment_form/payment_form'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { CartItemsContainer } from '../../cart_items_container/cart_items_container'

import { useTabs } from '@/core'
import { TabContent, TabHeader, TabList } from '..'
import { CartInfoButton } from '../../card_info_button/card_info_button'
import MainContainer from '../../main_container/main_container'

type TabsPrimitiveCompProps = {
  cartData: CartModel
}

export function TabNavigation({ cartData }: TabsPrimitiveCompProps) {
  const { tabKey, tabsData, onChangeTab } = useTabs()

  return (
    <MainContainer dataTestId="tab-navigation">
      <PaymentFormProvider>
        <TabsPrimitive.Root defaultValue="bag" value={tabKey}>
          <TabList>
            {tabsData.map(({ title, key }) => (
              <TabHeader tabKey={key} title={title} />
            ))}
          </TabList>

          <TabContent tabKey="bag">
            <CartItemsContainer items={cartData.items} />
          </TabContent>

          <TabContent tabKey="payment">
            <PaymentForm />
          </TabContent>

          <TabContent tabKey="confirmation">
            <Confirmation items={cartData.items} />
          </TabContent>
        </TabsPrimitive.Root>

        <BottomPaymentInformation cartData={cartData}>
          <CartInfoButton tabKey={tabKey} onCallToAction={onChangeTab} />
        </BottomPaymentInformation>
      </PaymentFormProvider>
    </MainContainer>
  )
}
