import { useState } from 'react';
import { useNavigate } from "react-router-dom";



import ProductItem, { ProductItemProps } from '../../components/product-item/product-item';
import { TotalContainer } from '../../components/total-container/total-container';
import { BackgroundSection, Base, TotalResult } from '../../stitches.config';

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
            <Base>
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
            </Base>
            <TotalResult>
                <Base>
                    <TotalContainer
                        items={products.length}
                        productsTotal={0}
                        shippingTotal={0}
                        discountTotal={0}
                        subtotal={0}
                        navigate={navigate}
                    />
                </Base>
            </TotalResult>
        </>
    );
};

export default Cart;
