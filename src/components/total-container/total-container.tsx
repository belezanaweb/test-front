import { useCart } from "../../context/cart.context";
import { Container, RowContainer, RowContainerSubTotal, RowContainerDiscount } from "./total-container.styled";


export const TotalContainer = () => {
    const { cart } = useCart();

    const { items, discount, subTotal, shippingTotal, total } = cart;

    const itemDescription = items.length === 1 ? `item` : 'itens';
    const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

    return (
        <Container>
            <RowContainer>
                <div>Produtos: ({`${items.length} ${itemDescription}`})</div>
                <div>{formatCurrency(total)}</div>
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
                <div>Subtotal:</div>
                <div>{formatCurrency(subTotal)}</div>
            </RowContainerSubTotal>
        </Container>
    );
};
