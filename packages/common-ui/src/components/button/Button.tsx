'use client'

import { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { buttonStyles } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>

export function Button({ intent, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        intent,
        disabled: props.disabled
      })}
      disabled={props.disabled}
      {...props}
    />
  )
}
