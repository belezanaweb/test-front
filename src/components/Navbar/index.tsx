import { Card } from '../Card'
import NavItem from './NavItem'
import './styles.css'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function Navbar() {
  return (
   
  
    <Flex
      bg="white"
      display="flex"
      justifyContent="center"
      flexDir={'row'}
      alignItems="stretch"
      h="40px"
      mb="20px"
      boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.1)'}
    >
      <NavItem name="Sacola" url="/bag" />
      <NavItem name="Pagamento" url="/payment" />
      <NavItem name="Confirmação" url="/confirmation" />
    </Flex>
   
  )
}
