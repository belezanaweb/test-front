import { PropsWithChildren, SyntheticEvent } from 'react'

interface ButtonProps {
  className?: string;
  variant?: string;
  onClick?: (e: SyntheticEvent) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function getVariantStyles(variant: string) {
  switch (variant) {
    case 'main':
      return 'bg-fuschia'

    default:
      return 'bg-black'
  }
}

export default function Button({
  children,
  className = '',
  variant = 'main',
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const variantStyles = getVariantStyles(variant)
  return (
    <button
      type={type}
      className={`rounded w-full py-3 text-center text-white font-bold text-lg ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
