import { InputHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const textFieldStyles = cva('w-full rounded border p-3.5 text-sm text-black focus:outline-none', {
  variants: {
    isInvalid: {
      true: 'border-red-500 focus:border-red-500'
    }
  },
  compoundVariants: [
    {
      isInvalid: false,
      class: 'border-neutral-500 focus:border-purple-500'
    }
  ],
  defaultVariants: {
    isInvalid: false
  }
})

type Props = {
  helperText?: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldStyles>

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ isInvalid, helperText, label, id, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <label className="text-sm text-neutral-800" htmlFor={id}>
            {label}
          </label>
        )}
        <input {...props} ref={ref} id={id} className={textFieldStyles({ isInvalid })} />
        {helperText && <p className="text-xs text-red-500">{helperText}</p>}
      </div>
    )
  }
)
