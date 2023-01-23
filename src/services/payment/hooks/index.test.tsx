
import { renderHook, act } from '@testing-library/react';
import { useCreditCard } from ".";

describe('Payment hooks component', () => {

    it('should return payment data null', () => { 
        const { result } = renderHook(() => useCreditCard());
        expect(result.current.creditCard).toEqual(
            {
                "number": "",
                "cvv": "",
                "date": "",
                "name": ""
            }
        )
    });
    it('should fire fetch basket data', async () => { 
        const { result } = renderHook(() => useCreditCard());
        act(() => {
            result.current.setCreditCard({
                number: "1111.1111.1111.111"
            })
        })
        expect(result.current.creditCard).toEqual({
            "number": "1111.1111.1111.111",
            "cvv": "",
            "date": "",
            "name": ""
        });
    });


})
