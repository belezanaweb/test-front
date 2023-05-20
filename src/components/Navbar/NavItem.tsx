import { useLocation } from 'react-router-dom'
import { Card } from '../Card'
import './styles.css'
import { Box, Flex, Text } from '@chakra-ui/react'

interface NavItem {
  name: string;
  url: string;
}

export default function NavItem({ name = '', url }: NavItem) {
  const { pathname } = useLocation()

  let isActive = false

  if (pathname === url) {
    isActive = true
  }
  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent={'center'}
      fontFamily="Arial"
      fontStyle=" normal"
      fontWeight="400"
      fontSize="14px"
      lineHeight="24px"
    //   borderBottom={'1px solid gray'}
      borderBottom={isActive ? '4px solid black' : '1px solid gray'}
      padding=" 0 8px"
      // borderBottom={'4px solid black'}
    >
      {name}
    </Flex>
  )
}
