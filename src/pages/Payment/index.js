import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import NavHeaderStep from '../../components/NavHeaderStep';
import ValueReviewCart from '../../components/ValueReviewCart';
import ButtonLink from '../../components/Button';
import ContainerBox from '../../components/ContainerBox';
import InputText from '../../components/InputText';
import Form from '../../components/Form';
import { Redirect } from 'react-router-dom';

const Payment = () => {
    const [data, setData] = useContext(CartContext);
    const [validForm, setValidForm] = useState(true);

    const handleClick = () => {
        setData({ ...data, cartStep: 2 });
    }

    const handleChange = event => {
        let prevValid = (event.target.value.replace(/[^0-9A-Z]+/gi, '') === '');
        setData({ ...data, [event.target.name]: { value: event.target.value, valid: prevValid } });
    }

    useEffect(() => {
        if ((data.cardNum.valid === false && data.name.valid === false && data.validateData.valid === false && data.cvv.valid === false)) {
            setValidForm(false);
        }
        else {
            setValidForm(true);
        }
    }, [data])

    return (
        <div className='container'>
            <NavHeaderStep />
            <ContainerBox title='CARTÃO DE CRÉDITO'>
                <Form>
                    <InputText onChange={handleChange} valid={data.cardNum.valid} mask='9999.9999.9999.9999' labelText='Número do Cartão:' name='cardNum' value={data.cardNum.value} />
                    <InputText onChange={handleChange} valid={data.name.valid} labelText='Nome do Titular:' name='name' placeholder='Como no Cartão' value={data.name.value} />
                    <InputText onChange={handleChange} valid={data.validateData.valid} mask='99/9999' labelText='Validade (mês/ano):' name='validateData' value={data.validateData.value} width={55} />
                    <InputText onChange={handleChange} valid={data.cvv.valid} mask='999' labelText='CVV:' name='cvv' value={data.cvv.value} width={45} />
                </Form>
            </ContainerBox>
            <ValueReviewCart
                subTotal={data.store.subTotal}
                shippingTotal={data.store.shippingTotal}
                discount={data.store.discount}
                total={data.store.total} />
            <ButtonLink disabled={validForm} text='FINALIZAR O PEDIDO' url='success' onClick={handleClick} />
            {data.cartStep === 2 && <Redirect to='success' />}
        </div>
    )
}

export default Payment;