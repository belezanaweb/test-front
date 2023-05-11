import { NavigateFunction } from "react-router-dom";
import { Button } from "../button/button.styled";
import { Container, RowContainer, RowContainerSubTotal, RowContainerDiscount, ButtonContainer } from "./total-container.styled";

interface ITotalContainer {
    items: number;
    productsTotal: number;
    shippingTotal: number;
    discountTotal: number;
    subtotal: number;
    navigate: NavigateFunction;
}

export const TotalContainer = ({ items, productsTotal, shippingTotal, discountTotal, subtotal, navigate }: ITotalContainer) => {
    const itemDescription = items === 1 ? `item` : 'itens';
    const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

    return (
        <Container>
            <RowContainer>
                <div>Produtos: ({`${items} ${itemDescription}`})</div>
                <div>{formatCurrency(productsTotal)}</div>
            </RowContainer>
            <RowContainer>
                <div>Frete:</div>
                <div>{formatCurrency(shippingTotal)}</div>
            </RowContainer>
            <RowContainer>
                <div>Desconto:</div>
                <RowContainerDiscount><div>{formatCurrency(discountTotal)}</div></RowContainerDiscount>
            </RowContainer>
            <RowContainerSubTotal>
                <div>Subtotal:</div>
                <div>{formatCurrency(subtotal)}</div>
            </RowContainerSubTotal>
            <ButtonContainer>
                <Button onClick={() => navigate('/checkout')}>Seguir para o pagamento</Button>
            </ButtonContainer>
        </Container>
    );
};
