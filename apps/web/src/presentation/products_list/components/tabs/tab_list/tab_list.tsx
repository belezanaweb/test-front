import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ReactNode } from 'react'

type TabListProps = {
  children: ReactNode
}

export function TabList({ children }: TabListProps) {
  return (
    <TabsPrimitive.List className="mb-5 flex w-full items-center justify-center bg-white shadow-md md:rounded">
      {children}
    </TabsPrimitive.List>
  )
}
