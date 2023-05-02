import React from 'react'
import { clsx } from 'clsx'

export type TabsProps = {
  children: React.ReactNode
}

export type TabsListProps = {
  active?: boolean
  children: React.ReactNode
} & React.LiHTMLAttributes<HTMLLIElement>

const Tabs = ({ children }: TabsProps) => {
  return (
    <nav className="flex">
      <ul className="flex gap-6 border-b border-gray">{children}</ul>
    </nav>
  )
}

const TabsList = ({ active = false, children, ...props }: TabsListProps) => {
  return (
    <li
      className={clsx('-mb-px flex', {
        'border-b-4 border-black': active
      })}
      {...props}
    >
      {children}
    </li>
  )
}

Tabs.List = TabsList

export { Tabs, TabsList }
