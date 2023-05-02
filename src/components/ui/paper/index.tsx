import { classnames } from '@/lib/utils'
import React from 'react'

export type PaperProps = {
  title?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Paper = ({ title, className, children, ...props }: PaperProps) => {
  return (
    <div
      className={classnames('mx-2 rounded border border-gray-light bg-white p-2 px-3', className)}
      {...props}
    >
      {title && <h2 className="mt-2 text-xl text-black">{title}</h2>}
      {children}
    </div>
  )
}
