import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

export const Button = (props: ButtonProps) => (
  <ChakraButton
    w="100%"
    h="48px"
    bg="#9222DC"
    colorScheme="purple"
    padding=" 16px 8px"
    fontFamily={'Arial'}
    mt={'24px'}
    borderRadius={'4px'}
    fontStyle="normal"
    fontWeight={700}
    fontSize="18px"
    lineHeight="16px"
    {...props}
  />
)
