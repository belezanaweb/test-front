import { Card } from '../Card'

import { Flex, Text, Button } from '@chakra-ui/react'
import data from '../../../data.json'
import { Link } from 'react-router-dom'

interface CardFooterProps {
  path: string;
  text: string;
  children: React.ReactNode;
}

export default function Summary({ path, text, children }: CardFooterProps) {
  return (
    <Flex
      w="100%"
      bg="white"
      color="black"
      justifyContent={'center'}
      align={'center'}
      flexDir={'row'}
    >
      <Flex
        flexDir={'column'}
        p={'8px'}
        w="100%"
        fontSize={'14px'}
        fontWeight={'400'}
        letterSpacing="0.269231px"
        fontFamily={'Helvetica'}
      >
        <Flex justifyContent={'space-between'} w="100%" fontFamily={'Arial'}>
          <Text>Produtos: {`(${data.items.length} items)`}</Text>
          <Text>
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              data.subTotal
            )}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'} w="100%">
          <Text>Frete:</Text>
          <Text>
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              data.shippingTotal
            )}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'} w="100%">
          <Text>Desconto:</Text>
          <Text fontWeight={700} color="#9222DC">
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              data.discount
            )}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'} w="100%" fontWeight={700}>
          <Text>SubTotal:</Text>
          <Text>
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(data.total)}
          </Text>
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}
