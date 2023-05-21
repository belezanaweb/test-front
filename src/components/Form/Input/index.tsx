import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
  labelColor?: string[];
  isRequired?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, labelColor, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          htmlFor={name}
          color={'#515151'}
          fontSize={'14px'}
          lineHeight={'16px'}
          mb={'5px'}
        >
          {label}
        </FormLabel>
      )}
      <ChakraInput
        h="44px"
        _placeholder={{ color: '#CCCCCC' }}
        borderColor={'#CCCCCC'}
        name={name}
        id={name}
        ref={ref}
        variant="outline"
        borderRadius={'4px'}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>{typeof error?.message === 'string' && error?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
