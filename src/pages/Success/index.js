import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NavHeaderStep from '../../components/NavHeaderStep';
import ProductList from '../../components/ProductList';
import ValueReviewCart from '../../components/ValueReviewCart';
import ContainerBox from '../../components/ContainerBox';
import CardData from '../../components/CardData';
import MessageBox from '../../components/MessageBox';

const Success = () => {
    const [data] = useContext(CartContext);
    
    return (
        <div className='container'>
            <NavHeaderStep />
            <MessageBox text='COMPRA EFETUADA COM SUCESSO' />
            <ContainerBox title='PAGAMENTO'>
                <CardData data={data} name={data.name.value} cardNum={data.cardNum.value} validateData={data.validateData.value} />
            </ContainerBox>
            <ContainerBox title='PRODUTOS'>
                <ProductList store={data.store} />
            </ContainerBox>
            <ValueReviewCart
                subTotal={data.store.subTotal}
                shippingTotal={data.store.shippingTotal}
                discount={data.store.discount}
                total={data.store.total} />
        </div>
    )
}

export default Success;

