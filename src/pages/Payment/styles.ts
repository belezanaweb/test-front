import styled from "styled-components";
import { ShadowPaper } from "../../components/ShadowPaper/styles";
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
    font-size: 1.4rem;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  > div {
    width: 100%;
  }
`;

export const DividedFields = styled.div`
  display: flex;
  gap: 20px;
`;
export const PaymentContainer = styled(ShadowPaper)`
  gap: 15px;
  flex-direction: column;
`;
