import styled from "styled-components";
import { colors } from "../../styles/style-config";
import { ShadowPaper } from "../ShadowPaper/styles";

export const Container = styled.div`
  width: 100%;
  border-radius: 3px;

  h2 {
    color: ${colors.titleColor};
    font-size: 1.4rem;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;

export const CardsContainer = styled(ShadowPaper)`
  flex-direction: column;
  gap: 15px;
`;

export const ProductContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.borderColorLight};
  border-radius: 3px;
  padding: 14px 10px;
  gap: 10px;
  img {
    object-fit: contain;
    width: ${({ useSmallForm }: { useSmallForm?: boolean }) =>
      useSmallForm && "42px"};
  }
`;

export const PriceSpecificationContainer = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;

  span {
    font-size: 1.3rem;
  }
  span + span {
    align-self: flex-end;
  }
`;
