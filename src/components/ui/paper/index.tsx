import { classnames } from '@/lib/utils'
import React from 'react'

export type PaperProps = {
  title?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Paper = ({ title, className, children, ...props }: PaperProps) => {
  return (
    <div
      className={classnames('rounded border border-gray-light bg-white p-2 px-3 mx-2', className)}
      {...props}
    >
      {title && <h2 className="text-xl text-black mt-2">{title}</h2>}
      {children}
    </div>
  )
}
