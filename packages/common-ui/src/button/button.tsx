'use client'

import { VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { buttonStyles } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>

export function Button({ intent, className, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonStyles({
          intent,
          disabled
        }),
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
