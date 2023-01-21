import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Wrapper } from "../../../theme/styles";

function Home() {
  return (
    <Content>
      <Wrapper maxWidth="420px">
        <Welcome>
          <WelcomeStatus>Olá!</WelcomeStatus>
          <WelcomeTitle>Tudo bem?</WelcomeTitle>
          <WelcomeText>Este teste foi desenvolvido por mim, Hugo Renzi. Qualquer dúvida, pode entrar em contato comigo. Estou ansioso para podermos bater um papo! Agradeço pela oportunidade.</WelcomeText>
        </Welcome>
        <Button to="/checkout/cart">
          Iniciar
        </Button>
      </Wrapper>
    </Content>
  );
}

export default Home;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const Welcome = styled.div`
  padding: 0 0 20px;
`;

const WelcomeStatus = styled.span`
  color: ${({ theme }) => theme.colors.orange400};
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  display: block;
  margin-bottom: 10px;
`;

const WelcomeTitle = styled.p`
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

const WelcomeText = styled.p`
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
