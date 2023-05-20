import './styles.css'
import data from '../../../data.json'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { Card } from '../Card'

type CardProductsProps = {
  showPrice?: boolean
}

export default function CardProducts({ showPrice = true }: CardProductsProps) {
  return (
    <Card h="324px">
      {data.items.map((product) => {
        return (
          <Flex
            w={'100%'}
            gap={'15px'}
            flexDir={'row'}
            key={product.product.sku}
            justifyContent={'space-between'}
            align={'center'}
            fontFamily={'Arial'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'16px'}
            color="black"
          >
            <img src={product.product.imageObjects[0].small} width={60} height={60} />

            <Text letterSpacing="0.27px" fontSize="12px" lineHeight="16px">
              {product.product.name}
            </Text>

            {showPrice && (
              <>
                {product.product.priceSpecification.discount > 0 ? (
                  <div>
                    <Text
                      fontFamily={'Helvetica'}
                      color={'#9B9B9B'}
                      textDecoration={'line-through'}
                      fontSize="14px"
                    >
                      {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                        product.product.priceSpecification.maxPrice
                      )}
                    </Text>
                    <Text letterSpacing="0.27px" fontSize="14px" lineHeight="16px" fontWeight={700}>
                      {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                        product.product.priceSpecification.originalPrice
                      )}
                    </Text>
                  </div>
                ) : (
                  <Text letterSpacing="0.27px" fontSize="14px" lineHeight="16px" fontWeight={700}>
                    {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                      product.product.priceSpecification.maxPrice
                    )}
                  </Text>
                )}
              </>
            )}
          </Flex>
        )
      })}
    </Card>
  )
}
