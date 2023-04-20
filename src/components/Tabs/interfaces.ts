import { ReactNode } from 'react'

interface TabItem {
  title: string
  content: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  Tabs: TabItem[]
  onChange?: (value: number) => void
  value: number
}
export interface NavItemProps {
  active?: boolean
  disabled?: boolean
}
