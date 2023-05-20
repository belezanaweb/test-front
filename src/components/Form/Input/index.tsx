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
    name: string | any;
    label?: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
    labelColor?: string[];
    isRequired?: boolean;
  }
  
  const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error = null, labelColor, isRequired = false, ...rest },
    ref
  ) => {
    return (
      <FormControl isInvalid={!!error} isRequired={isRequired}>
        {!!label && (
          <FormLabel htmlFor={name} color={labelColor ? labelColor[1] : 'gray.800'}>
            {label}
          </FormLabel>
        )}
        <ChakraInput
          name={name}
          id={name}
          ref={ref}
          variant="outline"
          size={'lg'}
          {...rest}
          color="gray.800"
        />
        {!!error && (
          <FormErrorMessage>{typeof error?.message === 'string' && error?.message}</FormErrorMessage>
        )}
      </FormControl>
    )
  }
  
  export const Input = forwardRef(InputBase)
  