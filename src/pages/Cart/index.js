import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import NavHeaderStep from '../../components/NavHeaderStep';
import ProductList from '../../components/ProductList';
import ValueReviewCart from '../../components/ValueReviewCart';
import ButtonLink from '../../components/Button';
import ContainerBox from '../../components/ContainerBox';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(CartContext);

    useEffect(() => {
        axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
            .then(response => {
                response.statusText === 'OK' && setData({ ...data, store: response.data });
            });
    }, []);

    const handleClick = () => {
        setData({ ...data, cartStep: 1 });
    }

    return (
        <div className='container'>
            <NavHeaderStep />
            <ContainerBox title='PRODUTOS'>
                <ProductList store={data.store} />
            </ContainerBox>
            <ValueReviewCart
                subTotal={data.store.subTotal}
                shippingTotal={data.store.shippingTotal}
                discount={data.store.discount}
                total={data.store.total} />

            <ButtonLink text='SEGUIR PARA O PAGAMENTO' url='payment' onClick={handleClick} />
            {data.cartStep === 1 && <Redirect to='payment' />}
        </div>
    )
}

export default Cart;

