
import { ICartItemViewModel } from "../../types/cart.types";
import { formatCurrency } from "../../utils/format-currency.utils";
import { DiscountPrice, DiscountPriceLineThrough, Price, PriceWrapper, ProductImage, ProductItemWrapper, ProductName } from "./product-item.component.styled";

export interface ProductItemProps {
    item: ICartItemViewModel;
}

export const testId = 'product-item';
const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
    const { product: { imageObjects, name, priceSpecification: { discount, price, maxPrice } } } = item;

    return (
        <ProductItemWrapper data-testid="product-item">
            <ProductImage src={imageObjects[0].thumbnail} alt={name} data-testid={`${testId}-image`} />
            <ProductName data-testid={`${testId}-name`}>{name}</ProductName>
            <PriceWrapper>
                {discount ? (
                    <DiscountPrice data-testid={`${testId}-discount-price`}><DiscountPriceLineThrough data-testid="discount-price-line-through">{formatCurrency(maxPrice)}</DiscountPriceLineThrough></DiscountPrice>
                ) : <></>}
                <Price data-testid={`${testId}-price`}>{formatCurrency(price)}</Price>
            </PriceWrapper>
        </ProductItemWrapper>
    );
};

export default ProductItem;
