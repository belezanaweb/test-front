import { useLocation } from "react-router-dom";
import { useCart } from "../../context/cart.context";
import { Container, RowContainer, RowContainerSubTotal, RowContainerDiscount } from "./total-container.component.styled";
import { formatCurrency } from "../../utils/format-currency.utils";


export const TotalContainer = () => {
    const { cart } = useCart();
    const { pathname } = useLocation();

    const { items, discount, subTotal, shippingTotal, total } = cart;
    const itemDescription = items.length === 1 ? `item` : 'itens';

    return (
        <Container>
            <RowContainer>
                <div>Produtos: ({`${items.length} ${itemDescription}`})</div>
                <div>{formatCurrency(subTotal)}</div>
            </RowContainer>
            <RowContainer>
                <div>Frete:</div>
                <div>{formatCurrency(shippingTotal)}</div>
            </RowContainer>
            <RowContainer>
                <div>Desconto:</div>
                <RowContainerDiscount><div>{formatCurrency(discount)}</div></RowContainerDiscount>
            </RowContainer>
            <RowContainerSubTotal>
                <div>{pathname !== '/confirmacao' ? 'Subtotal' : 'Total'}:</div>
                <div>{formatCurrency(total)}</div>
            </RowContainerSubTotal>
        </Container>
    );
};
