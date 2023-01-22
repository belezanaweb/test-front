import { getTotalBasket } from '.'
import { mockBasketData } from './mock'

describe('Basket helpers', () => {
    it('should render a loading', () => {
        it('should render a loading', () => {            
            expect(getTotalBasket(mockBasketData)).toEqual(524.9)
        });
    });
})