/* eslint-disable @typescript-eslint/no-empty-interface */
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { clsx } from 'clsx'
import { ReactNode } from 'react'

type TabsProps = {
  tabs: {
    title: string,
    value: string
  }[],
  children: ReactNode
}

const Tabs = ({ tabs, children }: TabsProps) => {
  return (
    <TabsPrimitive.Root defaultValue="bag">
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
  )
}

export default Tabs
