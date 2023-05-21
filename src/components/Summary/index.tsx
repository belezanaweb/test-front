import { Flex, Spinner } from '@chakra-ui/react'
import Item from './Item/item'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/Checkout'

interface CardFooterProps {
  children: React.ReactNode;
}

export default function Summary({ children }: CardFooterProps) {
  const { data, isLoading } = useContext(CheckoutContext)

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
      {!isLoading ? (
        <>
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
        </>
      ) : (
        <Flex justifyContent={'center'}>
          <Spinner />
        </Flex>
      )}
    </Flex>
  )
}
