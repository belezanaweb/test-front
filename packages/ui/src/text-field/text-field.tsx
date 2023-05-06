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
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldStyles>

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ isInvalid, helperText, ...props }, ref) => {
    return (
      <>
        <input {...props} ref={ref} className={textFieldStyles({ isInvalid })} />
        {helperText && <p className="text-xs text-red-500">{helperText}</p>}
      </>
    )
  }
)
