import { HTMLAttributes } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const styles = tv({
  base: 'h-12 px-2 py-4 rounded font-bold leading-none text-base w-full flex justify-center items-center',
  variants: {
    color: {
      primary: 'bg-purple-600 text-white',
      secondary: 'bg-black text-white',
    },
    state: {
      disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type ButtonVariants = Omit<VariantProps<typeof styles>, 'state'>;
export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    type?: 'button' | 'submit' | 'reset';
    form?: string;
    disabled?: boolean;
  };

export function Button({ className, color, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={styles({
        className,
        color,
        state: disabled ? 'disabled' : undefined,
      })}
      type="button"
      disabled={disabled}
      {...props}
    />
  );
}
