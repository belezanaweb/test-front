import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ReactNode } from 'react'
import { CartTabKeysType } from '../../card_info_button'

type TabContentProps = {
  children: ReactNode
  tabKey: CartTabKeysType
}

export function TabContent({children, tabKey}: TabContentProps) {
  return (
    <TabsPrimitive.Content
      key={`tab-content-${tabKey}`}
      value={tabKey}
      className="mx-2 my-5 rounded-b-lg bg-white"
    >
      {children}
    </TabsPrimitive.Content>
  )
}