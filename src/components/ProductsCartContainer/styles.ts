import styled from "styled-components";
import { colors } from "../../utils/style-config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 12px;
`;

export const ProductContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.borderColor};
  border-radius: 3px;
  padding: 14px 10px;
  img {
    object-fit: contain;
  }
`;

export const PriceSpecificationContainer = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;

  span + span {
    align-self: flex-end;
  }
`;
