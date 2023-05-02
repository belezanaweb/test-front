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
            'border border-gray-light text-sm rounded focus:ring-brand focus:border-brand block w-full p-3 placeholder-gray-light',
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
