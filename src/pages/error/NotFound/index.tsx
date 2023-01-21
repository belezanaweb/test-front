import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Wrapper } from "../../../theme/styles";

function NotFound() {
  return (
    <Content>
      <Wrapper maxWidth="420px">
        <Error>
          <ErrorStatus>404</ErrorStatus>
          <ErrorTitle>Ops... Algo de errado não está certo.</ErrorTitle>
          <ErrorText>Clique no botão abaixo para voltar para a navegação. Caso o erro persista, por favor entre em contato.</ErrorText>
        </Error>
        <Button to="/checkout/cart">
          Voltar para a experiência
        </Button>
      </Wrapper>
    </Content>
  );
}

export default NotFound;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const Error = styled.div`
  padding: 0 0 20px;
`;

const ErrorStatus = styled.span`
  color: ${({ theme }) => theme.colors.orange400};
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  display: block;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 100px;
  }
`;

const ErrorTitle = styled.p`
  color: ${({ theme }) => theme.colors.black400};
  text-align: center;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 18px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 20px;
    line-height: 22px;
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 17px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 22px;
  }
`;
