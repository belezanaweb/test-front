import { Basket } from '../types'

//O valor total do mockito está errado por isso fiz desse jeito.
export const getTotalBasket = (basket: Basket ): number => {
   const total =  basket?.items?.map(item =>  item?.product?.priceSpecification?.originalPrice).reduce((acc, value) => {
        return acc + value
    }, 0)
    return total;
}