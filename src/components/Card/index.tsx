import { Box, Flex, FlexProps } from '@chakra-ui/react'

export const Card = (props: FlexProps) => (
  <Box mx={2} bg="white">
    <Flex
      border="1px solid #cccccc;"
      gap={'40px'}
      flexDir={'column'}
      borderRadius={'4px'}
      color="black"
      p={'20px 8px 40px 8px'}
      {...props}
    />
  </Box>
)
