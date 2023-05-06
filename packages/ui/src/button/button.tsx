import { ButtonHTMLAttributes } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva('rounded border text-lg font-bold cursor-pointer disabled:cursor-not-allowed py-4 px-2 w-full', {
  variants: {
    color: {
      primary: null,
      black: null
    },
    disabled: {
      true: 'bg-neutral-500 text-neutral-800 border-transparent'
    },
    isLoading: {
      true: 'bg-neutral-500 text-neutral-700 border-transparent'
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: false,
      isLoading: false,
      class: 'bg-purple-500 text-white'
    },
    {
      color: 'black',
      disabled: false,
      isLoading: false,
      class: 'border-transparent bg-black text-white'
    }
  ],
  defaultVariants: {
    color: 'primary',
    disabled: false,
    isLoading: false
  }
})

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>

export function Button({ color, children, isLoading, ...props }: Props) {
  return (
    <button
      {...props}
      className={buttonStyles({
        color,
        isLoading,
        disabled: props.disabled
      })}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
