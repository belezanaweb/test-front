import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { Card } from '../Card'

type ProductItemProps = {
  showPrice?: boolean,
  title?: string,
  name: string,
  image: string,
  price: number,
  maxPrice: number
}

export default function ProductItem({
  showPrice = true,
  name,
  image,
  price,
  maxPrice
}: ProductItemProps) {
  const isPromotionalPrice = price != maxPrice
  return (
    <Flex
      w={'100%'}
      gap={'15px'}
      flexDir={'row'}
      justifyContent={'space-between'}
      align={'center'}
      fontFamily={'Arial'}
      fontStyle={'normal'}
      fontWeight={400}
      lineHeight={'16px'}
      color="black"
    >
      <img src={image} width={60} height={60} alt={name} />

      <Text letterSpacing="0.27px" fontSize="12px" lineHeight="16px">
        {name}
      </Text>

      {showPrice && (
        <Flex gap={'4px'} flexDir={'column'}>
          {isPromotionalPrice && (
            <Text
              fontFamily={'Helvetica'}
              color={'#9B9B9B'}
              textDecoration={'line-through'}
              fontSize="14px"
            >
              {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(maxPrice)}
            </Text>
          )}
          <Text letterSpacing="0.27px" fontSize="14px" lineHeight="16px" fontWeight={700}>
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(maxPrice)}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}
