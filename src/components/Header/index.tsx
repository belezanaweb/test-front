import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Wrapper } from "../../theme/styles";
import { HeaderItemType } from "../../types";

export function Header() {
  const location = useLocation();

  const steps = [{
    title: 'Sacola',
    path: '/checkout/cart'
  }, {
    title: 'Pagamento',
    path: '/checkout/payment'
  }, {
    title: 'Confirmação',
    path: '/checkout/confirmation'
  }];

  return (
    <Component>
      <Wrapper>
        <ItemsList>
          {steps.map(step => (
            <Item key={step.title} isHighlighted={location.pathname === step.path}>
              {step.title}
            </Item>
          ))}
        </ItemsList>
      </Wrapper>
    </Component>
  );
}

const Component = styled.header`
  background-color: ${({ theme }) => theme.colors.white200};
  box-shadow: ${({ theme }) => theme.shadows.default};
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    margin-bottom: 24px;
  }
`;

const ItemsList = styled.ul`
  display: flex;
  padding: 12px 11px;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    max-width: 420px;
    margin: auto;
    padding: 24px 0;
  }
`;

const Item = styled.li<HeaderItemType>`
  font-size: 13px;
  line-height: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ isHighlighted, theme }) => isHighlighted ? theme.colors.orange400 : theme.colors.gray400};

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 15px;
    line-height: 18px;
  }
`;
