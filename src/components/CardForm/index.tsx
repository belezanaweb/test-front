import { useEffect } from 'react'
import style from './style.module.scss'
import Input from '../Input';
import useForm from '../../hooks/useForm';
import Heading from '../Heading';

const CardForm = () => {
    const cardNumber = useForm('cardNumber');
    const cardName = useForm('cardName');
    const expire = useForm('expire');
    const cvv = useForm('cvv');

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    useEffect(() => {
        if (cardNumber.valid && cardName.valid && expire.valid && cvv.valid) {
            console.log('Cartão OK!')
        } else {
            console.log('Cartão invalido!')
        }
    }, [cardNumber.valid, cardName.valid, expire.valid, cvv.valid])

    return (
        <>
            <Heading>Cartão de Crédito</Heading>
            <form className={style.container} onSubmit={handleSubmit}>
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
