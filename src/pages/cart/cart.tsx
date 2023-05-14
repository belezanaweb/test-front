import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProductItem from '../../components/product-item/product-item.component';
import { TotalContainer } from '../../components/total-container/total-container.component';
import { BackgroundSection, TotalResult } from '../../stitches.config';
import { Button } from '../../components/button/button.styled';
import { ButtonContainer, EmptyCartContainer, EmptyCartDescription, EmptyCartTitle, WrapperBodySession, WrapperFooterSession } from './cart.styled';
import { useCart } from '../../context/cart.context';
import { getCartService } from '../../services/get-cart.service';
import { ICartItemViewModel } from '../../types/cart.types';
import { Loader } from '../../components/loader/loader.component';

const Cart = (): JSX.Element => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { cart, setCart } = useCart();
    const showFooter = cart?.items?.length > 1;

    const onInit = useCallback(async () => {
        const cartResponse = await getCartService();
        setCart(cartResponse);
        setIsLoading(false);
    }, [setCart, setIsLoading]);

    useEffect(() => {
        onInit();
    }, [onInit]);

    const productsList = useMemo(() => {
        return cart?.items?.map((item: ICartItemViewModel, index: number) => (
            <ProductItem key={index} item={item} />
        ));
    }, [cart.items]);

    const EmptyCart = (): JSX.Element => {
        return (
            <EmptyCartContainer>
                <EmptyCartTitle>SEU CARRINHO ESTÁ VAZIO</EmptyCartTitle>
                <EmptyCartDescription>Navegue pelas categorias da loja ou faça uma busca pelo seu produto.</EmptyCartDescription>
            </EmptyCartContainer>
        )
    };

    return (
        isLoading ? (
            <Loader />
        ) : (
            <>
                <WrapperBodySession>
                    <BackgroundSection>
                        {!cart.items.length ? EmptyCart() : productsList}
                    </BackgroundSection>
                </WrapperBodySession>
                <TotalResult>
                    <WrapperFooterSession>
                        {showFooter && (
                            <>
                                <TotalContainer />
                                <ButtonContainer>
                                    <Button color={'primary'} disabled={!cart.items.length} onClick={() => navigate('/checkout')}>Seguir para o pagamento</Button>
                                </ButtonContainer>
                            </>
                        )}
                    </WrapperFooterSession>
                </TotalResult>
            </>
        )
    );
};

export default Cart;
