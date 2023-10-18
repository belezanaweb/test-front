import * as React from 'react'

import { cn } from '@/lib/utils'
import { cardNumber, cvv, validateCardData } from '@/utils/mask'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: 'cardNumber' | 'cvv' | 'validateCardData'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, onChangeCapture, ...props }, ref) => {
    const masks = { cardNumber, cvv, validateCardData }

    const handleOnChangeCapture = (e: React.FormEvent<HTMLInputElement>) => {
      if (mask) {
        e.currentTarget.value = masks[mask](e.currentTarget.value)
      }
    }

    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
          className
        )}
        ref={ref}
        onChangeCapture={(e) => {
          handleOnChangeCapture(e)
          onChangeCapture && onChangeCapture(e)
        }}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
