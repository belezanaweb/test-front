
import { useState, useEffect } from 'react';
import { useCreditCard } from '../../payment/hooks';
import { useBasket } from '../../basket/hooks';
import { useNavigate } from 'react-router-dom';

export const useRedirectRouterInvalid = (route: string) => {
    const [isRouteValid, setRouteValid ] = useState(false)

    const navigate = useNavigate()
    const { basket } = useBasket();
    const { creditCard } = useCreditCard();
    useEffect(() => {
        if(route === "payment" && !basket) {
            navigate("/");
            return;
        }
        if(route === "confirmation" && !creditCard.number) {
            navigate("/payment");
            return;
        }
        setRouteValid(true)
    },[]);
    return isRouteValid;
}