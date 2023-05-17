import * as TabsPrimitive from '@radix-ui/react-tabs'
import { CartTabKeysType } from "../../card_info_button"

export type TabHeaderProps = {
  tabKey: CartTabKeysType
  title: string
}

export function TabHeader({tabKey, title}: TabHeaderProps) {
  return (
    <TabsPrimitive.Trigger
      key={`tab-trigger-${tabKey}`}
      value={tabKey}
      className="radix-state-active:border-b-black radix-state-active:border-b-4 relative border-b border-b-gray-200 p-3 text-sm disabled:cursor-not-allowed disabled:text-neutral-500"
    >
      <span className="radix-state-active:text-black radix-state-inactive:text-gray-300 text-sm font-normal">
        {title}
      </span>
    </TabsPrimitive.Trigger>
  )
}
