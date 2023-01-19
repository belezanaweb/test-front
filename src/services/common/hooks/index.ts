
import { useCreditCard } from '../../payment/hooks';
import { useBasket } from '../../basket/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useRedirectRouterInvalid = () => {
    const navigate = useNavigate()
    const { basket } = useBasket();
    const {creditCard} = useCreditCard();
    useEffect(()=> {
        if(!basket) {
            navigate("/")
        }
        if(!creditCard.number) {
            navigate("/payment")
        }
    },[])
}