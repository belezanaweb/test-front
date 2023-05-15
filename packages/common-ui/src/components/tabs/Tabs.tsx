/* eslint-disable @typescript-eslint/no-empty-interface */
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface Tab {
  title: string;
  value: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List className={clsx('flex w-full items-center justify-center shadow-md')}>
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
      {tabs.map(({ value, content }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={clsx('rounded-b-lg bg-white px-6 py-4')}
        >
          {content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}

export default Tabs
