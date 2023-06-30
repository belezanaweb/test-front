import { HTMLAttributes, forwardRef } from 'react';

import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const styles = tv({
  slots: {
    containerStyle: 'flex flex-col',
    labelStyle: 'text-neutral-600 leading-none text-sm mb-1',
    inputStyle:
      'w-full h-11 rounded shadow-inner border border-stone-300 px-4 text-black text-sm leading-none outline-none',
    errorStyle: 'text-red-600 text-xs leading-none mt-1',
  },

  variants: {
    color: {
      error: {
        inputStyle: 'border-red-600',
      },
    },
  },
});

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className, ...props }, ref) => {
    const { containerStyle, labelStyle, inputStyle, errorStyle } = styles({
      color: error ? 'error' : undefined,
    });

    return (
      <div className={twMerge(containerStyle(), className)}>
        <label htmlFor={id} className={labelStyle()}>
          {label}
        </label>

        <input id={id} ref={ref} className={inputStyle()} {...props} />

        {error && <span className={errorStyle()}>{error}</span>}
      </div>
    );
  },
);
