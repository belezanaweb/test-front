import './styles.css'
import data from '../../../data.json'
import { Box, Flex } from '@chakra-ui/react'
import { Card } from '../Card'

type CardProductsProps = {
  showPrice?: boolean
}

export default function CardProducts({ showPrice = true }: CardProductsProps) {
  return (
    <Card>
      {data.items.map((product) => {
        return (
          <Flex
            gap={'10px'}
            flexDir={'row'}
            key={product.product.sku}
            justifyContent={'space-between'}
            align={'center'}
          >
            <img
              src={
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg'
              }
              width={60}
              height={60}
            />
            <p className="p">{product.product.name}</p>
            {showPrice && (
              <>
                {product.product.priceSpecification.discount > 0 ? (
                  <div>
                    <p className="discount-price">
                      {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                        product.product.priceSpecification.maxPrice
                      )}
                    </p>
                    <p>
                      {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                        product.product.priceSpecification.originalPrice
                      )}
                    </p>
                  </div>
                ) : (
                  <p className="p">
                    {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                      product.product.priceSpecification.maxPrice
                    )}
                  </p>
                )}
              </>
            )}
          </Flex>
        )
      })}
    </Card>
  )
}
