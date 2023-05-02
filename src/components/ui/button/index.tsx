import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { classnames } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const buttonVariants = cva(
  'w-full rounded px-2 py-4 bg-brand text-white text-lg flex justify-center text-center font-bold disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-brand',
        dark: 'bg-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type ButtonProps = {
  children: React.ReactNode
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = ({ variant, isLoading, className, children, ...props }: ButtonProps) => {
  return (
    <button className={classnames(buttonVariants({ variant, className }))} {...props}>
      {isLoading ? <LoadingSpinner className="h-7 w-7 text-white" /> : children}
    </button>
  )
}

Button.displayName = 'Button'
