import styled from "styled-components";
import { Header } from "../../../components/Header";
import { useCartProducts } from "../../../services/hooks/cart/useCartProducts";
import { Title, Wrapper } from "../../../theme/styles";
import { CartInfo } from "../../../components/CartInfo";
import { CartItems } from "../../../components/CartItems";
import { PaymentInfo } from "../../../components/PaymentInfo";
import { Loading } from "../../commom/Loading";

function Confirmation() {
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
      <Wrapper maxWidth="600px">
        <Success>
          <SuccessIcon />
          <SuccessText>Compra efetuada com sucesso</SuccessText>
        </Success>
        <Title>Pagamento</Title>
        <PaymentInfo />
        <Title>Produtos</Title>
        <CartItems items={data?.items} isConfirmationOnly />
        <CartInfo {...cartInfo} />
      </Wrapper>
    </Content>
  );
}

export default Confirmation;

const Content = styled.main``;

const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2px 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    margin: 10px 0 30px;
  }
`;

const SuccessIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.orange300};
  border-radius: 100%;
  margin-bottom: 11px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  &::after {
    content: '';
    border: solid ${({ theme }) => theme.colors.orange300};
    position: absolute;
    transform: rotate(-48deg) translate(-2px, 13px);
    border-width: 0 0 2px 2px;
    width: 18px;
    height: 9px;

    @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
      width: 22px;
      height: 11px;
      transform: rotate(-48deg) translate(-3px,25px);
    }
  }
`;

const SuccessText = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange300};

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 19px;
  }
`;
