import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProductItem, { ProductItemProps } from '../../components/product-item/product-item';
import { TotalContainer } from '../../components/total-container/total-container';
import { BackgroundSection, Base, TotalResult } from '../../stitches.config';
import { Button } from '../../components/button/button.styled';
import { ButtonContainer, WrapperBodySession, WrapperFooterSession } from './cart.styled';

const productsListMock: ProductItemProps[] = [
    {
        imageSrc: '',
        name: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
        discountPrice: 123,
        price: 10,
    },
    {
        imageSrc: '',
        name: 'LOréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução',
        price: 10,
    },
    {
        imageSrc: '',
        name: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
        discountPrice: 123,
        price: 10,
    }
];

const Cart = (): JSX.Element => {
    const navigate = useNavigate();
    const [products] = useState<ProductItemProps[]>(productsListMock);

    return (
        <>
            <WrapperBodySession>
                <BackgroundSection>
                    {products.map(({ imageSrc, name, discountPrice, price }: ProductItemProps, index: number) => (
                        <ProductItem
                            key={index}
                            imageSrc={imageSrc}
                            name={name}
                            discountPrice={discountPrice}
                            price={price}
                        />
                    ))}
                </BackgroundSection>
            </WrapperBodySession>
            <TotalResult>
                <WrapperFooterSession>
                    <TotalContainer
                        items={products.length}
                        productsTotal={0}
                        shippingTotal={0}
                        discountTotal={0}
                        subtotal={0}
                    />
                    <ButtonContainer>
                        <Button disabled={!products.length} onClick={() => navigate('/checkout')}>Seguir para o pagamento</Button>
                    </ButtonContainer>
                </WrapperFooterSession>
            </TotalResult>
        </>
    );
};

export default Cart;
