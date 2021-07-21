import React, { useEffect, useContext } from 'react'
import { BillingContext } from '../../contexts/BillingContext'
import style from './style.module.scss'
import Input from '../Input';
import useForm from '../../hooks/useForm';
import Heading from '../Heading';

const CardForm: React.FC = () => {
    const cardNumber = useForm('cardNumber');
    const cardName = useForm('cardName');
    const expire = useForm('expire');
    const cvv = useForm('cvv');

    const { setCardApproved, setCardData } = useContext(BillingContext)

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    useEffect(() => {
        if (cardNumber.valid && cardName.valid && expire.valid && cvv.valid) {
            setCardData({
                numbers: cardNumber.value,
                name: cardName.value,
                expirationDate: expire.value
            })
            setCardApproved(true)
        } else {
            setCardData(null)
            setCardApproved(false)
        }
    }, [cardNumber.valid, cardName.valid, expire.valid, cvv.valid])

    return (
        <>
            <Heading>Cartão de Crédito</Heading>
            <form className={style.container} data-testid="cardForm-test" onSubmit={handleSubmit}>
                <div className={style.fieldCardNumber}>
                    <Input
                        label="Número do cartão:"
                        id="cardNumber"
                        type="text"
                        maxLength="19"
                        placeholder="_ _ _ _-_ _ _ _-_ _ _ _-_ _ _ _"
                        {...cardNumber}
                    />
                </div>
                <div className={style.fieldCardName}>
                    <Input
                        label="Nome do Titular:"
                        id="cardName"
                        type="text"
                        maxLength="50"
                        placeholder="Como no cartão"
                        {...cardName}
                    />
                </div>
                <div className={style.fieldExpire}>
                    <Input
                        label="Validade (mês/ano):"
                        id="expire"
                        type="text"
                        maxLength="7"
                        placeholder="00/0000"
                        {...expire}
                    />
                </div>
                <div className={style.fieldCode}>
                    <Input
                        label="CVV:"
                        id="cvv"
                        type="cvv"
                        maxLength="3"
                        placeholder="_ _ _"
                        {...cvv}
                    />
                </div>
            </form>
        </>
    );
};

export default CardForm;
