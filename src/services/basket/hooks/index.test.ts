
import { renderHook, waitFor } from '@testing-library/react';
import * as BasketHooks from '.';

import { useBasket, useFetchBasket } from ".";

global.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve("Testing something!")
}));

describe('Basket hooks component', () => {

    it('should return basket data null', () => { 
        const { result } = renderHook(() => useBasket());
        expect(result.current.basket).toBeNull()
    });

    it('should fire fetch basket data', async () => { 
        const { result } = renderHook(() => useBasket());
        await result.current.fetch()
        expect(result.current.basket).toEqual("Testing something!")
        result.current.basket = null;
    });

    it('should fire fetch when basket null', async () => { 
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: null,
                fetch: global.fetch
            }
        });
        const { result } = renderHook(() => useFetchBasket());
        waitFor(() => {
            expect(result?.current).toEqual("Testing something!")
        })
    });

})
