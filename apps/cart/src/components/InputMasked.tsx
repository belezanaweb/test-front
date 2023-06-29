/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useCallback } from 'react';
import NumberFormat, {
  NumberFormatValues,
  NumberFormatPropsBase,
} from 'react-number-format';

import { Input, InputProps } from './Input';

type CustomInput = Omit<InputProps, 'value' | 'onChange' | 'ref'>;

interface CustomInputMaskedProps {
  onChange?: (value: string) => void;
  value?: string;
}

type CustomNumberFormatProps = Omit<
  NumberFormatPropsBase<any>,
  'onValueChange' | 'onChange' | 'value'
>;

export type InputMaskedProps = CustomInputMaskedProps &
  CustomInput &
  CustomNumberFormatProps;

export const InputMasked = forwardRef<HTMLInputElement, InputMaskedProps>(
  ({ onChange, value, ...props }, ref) => {
    const handleValueChange = useCallback(
      (values: NumberFormatValues) => {
        const { formattedValue } = values;

        if (onChange) {
          onChange(String(formattedValue));
        }
      },
      [onChange],
    );

    return (
      <NumberFormat
        getInputRef={ref}
        customInput={Input}
        onValueChange={handleValueChange}
        value={value || ''}
        {...props}
      />
    );
  },
);
