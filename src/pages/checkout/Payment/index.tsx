import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { useCartProducts } from "../../../services/hooks/cart/useCartProducts";
import { Title, Wrapper } from "../../../theme/styles";
import { CartInfo } from "../../../components/CartInfo";
import { PaymentForm } from "../../../components/PaymentForm";
import { ColumnType } from "../../../types";
import { MouseEvent } from "react";
import { useNavigate } from "react-router";
import { Loading } from "../../commom/Loading";
import { useForm } from "../../../services/hooks/form/useForm";

function Payment() {
  const navigate = useNavigate();
  const { data, isLoading } = useCartProducts();

  const { formRef, formData, handleFormDataChange, isFormTriggered, handleTriggerForm } = useForm();

  if (isLoading || !data) {
    return (
      <Loading />
    );
  }

  const { items, ...cartInfo } = data!;

  const handleSubmit = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleTriggerForm(true);

    for (const [key, value] of Object.entries(formRef.current)) {
      if (!value) {
        return;
      }
    }

    localStorage.setItem('paymentData', JSON.stringify(formData));
    navigate('/checkout/confirmation');
  }

  return (
    <Content>
      <Header />
      <Wrapper>
        <Title>Cartão de Crédito</Title>
        <Row>
          <Column flex={4}>
            <PaymentForm
              ref={formRef}
              isFormTriggered={isFormTriggered}
              handleFormDataChange={handleFormDataChange}
            />
          </Column>
          <Column flex={2}>
            <CartInfo {...cartInfo} />
            <Button
              to="/checkout/confirmation"
              onClick={handleSubmit}
            >
              Finalizar o pedido
            </Button>
          </Column>
        </Row>
      </Wrapper>
    </Content>
  );
}

export default Payment;

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
