import { Flex } from '@chakra-ui/react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => (
  <Flex flexDir={'column'} h="100vh">
    <Navbar />
    <Flex
      h="calc(100vh - 40px)"
      gap={'20px'}
      flexDir={['column', 'row']}
      justifyContent={['space-between', 'center']}
      align={'flex-start'}
    >
      <Outlet />
    </Flex>
  </Flex>
)
