import React, { MouseEvent } from 'react';
import { useCreditCard } from '../../services/payment/hooks';
import { useBasket } from '../../services/basket/hooks';
import {  useNavigate } from 'react-router-dom';
import * as S from './styles'

interface HeaderProps {
    itemSelected: number;
}

const Header: React.FC<HeaderProps> = ({ itemSelected }) => {

    const navigate = useNavigate();
    const { basket } = useBasket();
    const {creditCard} = useCreditCard();

    const handlerPayment = (event: MouseEvent) => {
        event.preventDefault();
        if (basket) {
            navigate("/payment")
        }
    }
    const handlerConfirmation = (event: MouseEvent) => {
        event.preventDefault();
        if(creditCard.number) {
            navigate("/confirmation")
        }
    }
    return (
        <S.Container>
            <S.MenuUI>
                <S.MenuItem>
                    <S.MenuLink to="/" itemSelected={itemSelected === 0}>SACOLA</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink onClick={handlerPayment} to="/payment" itemSelected={itemSelected === 1}>PAGAMENTO</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink onClick={handlerConfirmation} to="/confirmation" itemSelected={itemSelected === 2}>CONFIRMAÇÃO</S.MenuLink>
                </S.MenuItem>
            </S.MenuUI>
        </S.Container>
    );
};


export default Header;