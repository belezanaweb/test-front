import styled from "styled-components";
import { ShadowPaper } from "../../components/ShadowPaper/styles";
import { colors } from "../../styles/style-config";

export const CreditCardContainerData = styled.div`
  width: 100%;
  h2 {
    color: ${colors.titleColor};
    font-size: 1.4rem;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    text-align: left;
  }
`;

export const CreditCardContentData = styled(ShadowPaper)`
  flex-direction: column;
  p {
    margin: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const IconRoundedBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39.5px;
  width: 39.5px;
  border-radius: 50%;
  border: 2px solid ${colors.highLightColor};
  color: ${colors.highLightColor};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 11px;
  h1 {
    color: ${colors.highLightColor};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    margin: 0;
  }
`;
