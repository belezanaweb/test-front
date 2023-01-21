import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { useCartProducts } from "../../../services/hooks/cart/useCartProducts";
import { Title, Wrapper } from "../../../theme/styles";
import { CartInfo } from "../../../components/CartInfo";
import { CartItems } from "../../../components/CartItems";
import { ColumnType } from "../../../types";
import { Loading } from "../../commom/Loading";

function Cart() {
  const { data, isLoading } = useCartProducts();

  if (isLoading || !data) {
    return (
      <Loading />
    );
  }

  const { items, ...cartInfo } = data!;

  return (
    <Content>
      <Header />
      <Wrapper>
        <Title>Produtos</Title>
        <Row>
          <Column flex={4}>
            <CartItems items={data?.items} />
          </Column>
          <Column flex={2}>
            <CartInfo {...cartInfo} />
            <Button to="/checkout/payment">Seguir para o pagamento</Button>
          </Column>
        </Row>
      </Wrapper>
    </Content>
  );
}

export default Cart;

const Content = styled.main``;

const Row = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    display: flex;
  }
`;

const Column = styled.div<ColumnType>`
  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    flex: ${({ flex }) => flex};

    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      margin-left: 10px;
    }
  }
`;
