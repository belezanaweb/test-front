import { Container, RowContainer, RowContainerSubTotal, RowContainerDiscount } from "./total-container.styled";

interface ITotalContainer {
    items: number;
    productsTotal: number;
    shippingTotal: number;
    discountTotal: number;
    subtotal: number;
}

export const TotalContainer = ({ items, productsTotal, shippingTotal, discountTotal, subtotal }: ITotalContainer) => {
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
        </Container>
    );
};
