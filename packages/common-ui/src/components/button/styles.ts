import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  'rounded border-none text-lg leading-4 heigh font-bold cursor-pointer py-4 px-2 w-full',
  {
    variants: {
      intent: {
        primary: null,
        secondary: null
      },
      disabled: {
        true: 'bg-gray-200 text-gray-400 border-none disabled:cursor-not-allowed '
      }
    },
    compoundVariants: [
      {
        intent: 'primary',
        disabled: false,
        class: 'bg-primary-100 text-white hover:bg-primary-200'
      },
      {
        intent: 'secondary',
        disabled: false,
        class: 'bg-black text-white'
      }
    ],
    defaultVariants: {
      intent: 'primary',
      disabled: false
    }
  }
)
