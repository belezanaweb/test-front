import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  'rounded border text-lg font-bold cursor-pointer py-4 px-2 w-full',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-surface',
        secondary: 'border-transparent bg-black text-white'
      },
      disabled: {
        true: 'bg-neutral-500 text-neutral-800 border-transparent'
      }
    },
    compoundVariants: [],
    defaultVariants: {
      intent: 'primary',
      disabled: false
    }
  }
)
