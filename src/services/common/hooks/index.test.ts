
import { renderHook, waitFor } from '@testing-library/react';
import { useRedirectRouterInvalid } from ".";
import * as BasketHooks from '../../basket/hooks';
import * as CreditCardHooks from '../../payment/hooks';

const mockNavigateClick = vi.fn();
vi.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigateClick
    }
});


describe('Common hooks component', () => {

    it('should redirect to root when basket null', () => { 
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: null
            }
        });
        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: {
                    number: null
                }
            }
        });
        renderHook(() => useRedirectRouterInvalid());
        expect(mockNavigateClick).toHaveBeenCalledWith("/")
    });

    it('should redirect to payment when creditCard data null', () => { 
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: {}
            }
        });
        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: {
                    number: null
                }
            }
        });
        renderHook(() => useRedirectRouterInvalid());
        expect(mockNavigateClick).toHaveBeenCalledWith("/payment")
    });

})
