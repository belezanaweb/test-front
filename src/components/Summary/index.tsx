import { Card } from '../Card'
import { Flex, Text, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Item from './Item/item'
import { useContext } from 'react'
import { PaymentContext } from '../../contexts/payment'

interface CardFooterProps {
  children: React.ReactNode;
}

export default function Summary({ children }: CardFooterProps) {
  const { data } = useContext(PaymentContext);

  return (
    <Flex
      w="100%"
      flexDirection={'column'}
      color="black"
      bg="white"
      padding="28px 20px"
      minH={'238px'}
      maxW="600px"
    >
      <Flex flexDir={'column'} w="100%" gap={'8px'}>
        <Item text={`Produtos: (${data.amountItems} items)`} value={data.subTotal} />
        <Item text={'Frete:'} value={data.shippingTotal} />
        <Item text={'Desconto:'} value={data.discount} color="#9222DC" discount={true} />
        <Item
          text={'SubTotal:'}
          value={data.total}
          color="#9222DC"
          fontWeight={700}
          fontSize="16px"
        />
      </Flex>
      {children}
    </Flex>
  )
}
