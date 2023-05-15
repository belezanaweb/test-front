import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { ReactNode } from 'react'

type TabContentProps = {
  children: ReactNode,
  keyValue: string
}

export function TabContent({ children, keyValue }: TabContentProps) {
  return (
    <TabsPrimitive.Content
      key={`tab-content-${keyValue}`}
      value={keyValue}
      className={clsx('mx-2 my-5 rounded-b-lg bg-white')}
    >
      {children}
    </TabsPrimitive.Content>
  )
}
