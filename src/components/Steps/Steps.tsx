/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useLocation, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSteps = styled.nav`
  background-color: white;
  border-radius: 0 0 3px 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  height: 40px;

  ol {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
`;

interface StyledStepProps {
  active?: boolean;
}

export const StyledStep = styled.li<StyledStepProps>`
  align-items: center;
  color: ${({ active, theme }) => {
    return active ? theme.colors.primaryLight : theme.colors.gray;
  }};
  display: flex;
  flex: 0;
  height: 100%;
  list-style-type: none;

  a {
    align-items: center;
    color: inherit;
    display: inline-flex;
    font-size: 13px;
    font-weight: 700;
    height: 100%;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

interface StepProps extends LinkProps {
  children: string;
}

const Step: React.FC<StepProps> = ({ children, to }) => {
  const router = useLocation();
  return (
    <StyledStep active={router.pathname === to} title={children}>
      <a>{children}</a>
    </StyledStep>
  );
};

const Steps: React.FC = () => {
  return (
    <StyledSteps>
      <ol>
        <Step to="/cart">Sacola</Step>
        <Step to="/payment">Pagamento</Step>
        <Step to="/success">Confirmação</Step>
      </ol>
    </StyledSteps>
  );
};

export default Steps;
