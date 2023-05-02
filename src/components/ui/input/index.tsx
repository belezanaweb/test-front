import React from 'react'

import { classnames } from '@/lib/utils'

export type InputProps = {
  isError?: boolean
  errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement | null, InputProps>(
  ({ isError, errorMessage, type = 'text', ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          {...props}
          className={classnames(
            'block w-full rounded border border-gray-light p-3 text-sm placeholder-gray-light focus:border-brand focus:ring-brand',
            {
              'border-error': isError
            }
          )}
        />
        {isError && errorMessage && <small className="text-xs text-error">{errorMessage}</small>}
      </>
    )
  }
)

Input.displayName = 'Input'
