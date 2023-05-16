'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { ReactNode, createContext, useContext, useState } from 'react';

type ReturnUseTabs = ReturnType<typeof useTabs>

const TabsContext = createContext<ReturnUseTabs>({} as ReturnUseTabs)
export const useTabsContext = () => useContext(TabsContext)

export function useTabs({ tabKey: tabKeyProp }: { tabKey: string }) {
  const [tabKey, setTabKey] = useState(tabKeyProp)

  return {
    tabKey,
    setTabKey
  }
}

type TabsProps = {
  tabs: {
    title: string,
    value: string
  }[],
  children: ReactNode
}& ReturnUseTabs


const Tabs = ({ tabs, children, ...useStepperProps }: TabsProps) => {
  const { tabKey } = useTabsContext()

  return (
    <TabsContext.Provider value={useStepperProps}>
      <TabsPrimitive.Root value={tabKey} defaultValue="bag">
            <TabsPrimitive.List
              className={clsx('mb-5 flex w-full items-center justify-center bg-white shadow-md')}
            >
              {tabs.map(({ title, value }) => (
                <TabsPrimitive.Trigger
                  key={`tab-trigger-${value}`}
                  value={value}
                  className={clsx(
                    'relative border-b border-b-gray-200 p-3 text-sm disabled:cursor-not-allowed disabled:text-neutral-500',
                    'radix-state-active:border-b-black radix-state-active:border-b-4'
                  )}
                >
                  <span
                    className={clsx(
                      'text-sm font-normal',
                      'radix-state-active:text-black',
                      'radix-state-inactive:text-gray-200'
                    )}
                  >
                    {title}
                  </span>
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>
            {children}
          </TabsPrimitive.Root>
    </TabsContext.Provider>
  )
}

export default Tabs
