import { ICartItemViewModel } from "../../types/cart.types";
import { DiscountPrice, DiscountPriceLineThrough, Price, PriceWrapper, ProductImage, ProductItemWrapper, ProductName } from "./product-item.styled";

export interface ProductItemProps {
    item: ICartItemViewModel;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
    const { product: { imageObjects, name, priceSpecification: { discount, price } } } = item;

    return (
        <ProductItemWrapper>
            <ProductImage src={imageObjects[0].thumbnail} alt={name} />
            <ProductName>{name}</ProductName>
            <PriceWrapper>
                {discount && (
                    <DiscountPrice>R$ <DiscountPriceLineThrough>{discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</DiscountPriceLineThrough></DiscountPrice>
                )}
                <Price>R$ {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
            </PriceWrapper>
        </ProductItemWrapper >
    );
};

export default ProductItem;
