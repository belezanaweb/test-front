import { cva } from 'class-variance-authority'

export const inputFieldStyles = cva('border rounded p-3.5 text-black ', {
  variants: {
    hasError: {
      true: 'border-error focus:outline-error'
    }
  },
  compoundVariants: [
    {
      hasError: false,
      class: 'border-gray-200 focus:outline-primary-100'
    }
  ],
  defaultVariants: {
    hasError: false
  }
})
