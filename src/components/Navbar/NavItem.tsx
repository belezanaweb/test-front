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
   
      fontFamily="Arial"
      fontStyle="normal"
      fontWeight="400"
      fontSize="14px"
      lineHeight="24px"
      color={isActive ? '#000000' : '#878787'}
      //   borderBottom={'1px solid gray'}
      borderBottom={isActive ? '4px solid black' : '1px solid gray'}
      padding="0 8px"
      // borderBottom={'4px solid black'}
    >
      {name}
    </Flex>
  )
}
