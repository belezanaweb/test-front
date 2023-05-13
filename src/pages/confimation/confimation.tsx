import { useNavigate } from 'react-router';
import { Button } from '../../components/button/button.styled';
import { TotalContainer } from '../../components/total-container/total-container.component';
import { BackgroundSection, TotalResult } from '../../stitches.config';
import { ButtonContainer, WrapperBodySession, WrapperFooterSession, Space, Title, InfoContainer, Info } from './confimation.styled';
import { useEffect, useMemo, useState } from 'react';
import { ICartItemViewModel, ICreditCart } from '../../types/cart.types';
import ProductItem from '../../components/product-item/product-item.component';

const ConfirmationOrder = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<ICartItemViewModel[]>([]);
    const [creditCart, setCreditCart] = useState<ICreditCart>();

    useEffect(() => {
        const cartString = localStorage.getItem('cart');
        const cart = cartString ? JSON.parse(cartString) : null;

        const creditCartString = localStorage.getItem('client-data');
        const creditCart = creditCartString ? JSON.parse(creditCartString) : null;

        if (cart) {
            setItems(cart.items);
        }

        if (creditCart) {
            setCreditCart(creditCart);
        }
    }, [setItems]);

    const goToInitial = () => {
        localStorage.removeItem('client-data');
        localStorage.removeItem('cart');
        localStorage.removeItem('order-number');
        navigate('/carrinho');
    };

    const productsList = useMemo(() => {
        return items?.map((item: ICartItemViewModel, index: number) => (
            <ProductItem key={index} item={item} />
        ));
    }, [items]);

    const getLastFourDigits = (creditNumber: string | undefined) => {
        if (creditNumber) {
            return creditNumber.substring(creditNumber.length - 4);
        }
    };

    const getExpirationDate = (date: string | undefined) => {
        if (date) {
            const [month, year] = date.split('/');
            return `${month}/20${year}`;
        }
    };

    return (
        <>
            <WrapperBodySession>
                <BackgroundSection>
                    <InfoContainer>
                        <Title>Compra efetuada com sucesso</Title>
                        <Info>{`****.****.****.${getLastFourDigits(creditCart?.cardNumber)}`}</Info>
                        <Info>{creditCart?.cardName} </Info>
                        <Info>{getExpirationDate(creditCart?.expirationDate)}</Info>
                    </InfoContainer>
                </BackgroundSection>
                <Space />
                <BackgroundSection>
                    {productsList}
                </BackgroundSection>
            </WrapperBodySession>
            <TotalResult>
                <WrapperFooterSession>
                    <TotalContainer />
                    <ButtonContainer>
                        <Button color={'secondary'} onClick={() => goToInitial()}>Voltar ao inicio da Loja</Button>
                    </ButtonContainer>
                </WrapperFooterSession>
            </TotalResult>
        </>
    );
};

export default ConfirmationOrder;
