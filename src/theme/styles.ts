import styled from "styled-components";
import { CardType, WrapperType } from "../types";

export const Wrapper = styled.div<WrapperType>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '1264px'};
  margin: auto;
  padding: 0 10px 0 9px;
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 11px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.gray800};

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 15px;
  }
`;

export const Card = styled.div<CardType>`
  background-color: ${({ theme }) => theme.colors.white200};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 3px;
  padding: ${({ padding }) => padding ? padding : '12px 12px 13px 13px'};
  margin-bottom: 20px;
`;
