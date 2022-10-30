import styled from "styled-components";
import { colors } from "../../utils/style-config";

export const CreditCardContainerData = styled.div`
  width: 100%;
  h2 {
    color: ${colors.titleColor};
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
    text-align: left;
  }

  p {
    padding: 12px;
    background-color: ${colors.backgroundColorLight};
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
    display: flex;
    flex-direction: column;
    span {
      margin: 0;
    }
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
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    margin: 0;
  }
`;
