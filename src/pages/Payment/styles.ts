import styled from "styled-components";
import { colors } from "../../styles/style-config";

export const Container = styled.form`
  width: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    color: ${colors.titleColor};
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const DividedFields = styled.div`
  display: flex;
  gap: 20px;
`;
export const PaymentContainer = styled.div`
  padding: 12px;
  background-color: ${colors.backgroundColorLight};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
