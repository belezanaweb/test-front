import { DiscountPrice, DiscountPriceLineThrough, Price, PriceWrapper, ProductImage, ProductItemWrapper, ProductName } from "./product-item.styled";

export interface ProductItemProps {
    imageSrc: string;
    name: string;
    price: number;
    discountPrice?: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
    imageSrc,
    name,
    price,
    discountPrice,
}) => {
    return (
        <ProductItemWrapper>
            <ProductImage src={imageSrc} alt={name} />
            <ProductName>{name}</ProductName>
            <PriceWrapper>
                {discountPrice && (
                    <DiscountPrice>R$ <DiscountPriceLineThrough>{discountPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</DiscountPriceLineThrough></DiscountPrice>
                )}
                <Price>R$ {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
            </PriceWrapper>
        </ProductItemWrapper >
    );
};

export default ProductItem;
