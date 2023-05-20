import { Box, Flex, FlexProps } from '@chakra-ui/react'

export const Card = (props: FlexProps) => (
  <Box mx={2}>
    <Flex
      bg="white"
      border="1px solid #cccccc;"
      flexDir={'column'}
      borderRadius={'4px'}
      color="black"
      {...props}
    />
  </Box>
)
