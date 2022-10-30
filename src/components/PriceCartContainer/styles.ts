import styled from "styled-components";
import { colors } from "../../styles/style-config";

export const Container = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
  }

  width: 100%;
  padding: 7px 15px;
  border: 1px solid ${colors.borderColorDark};
  border-radius: 3px;
  #discount {
    color: ${colors.highLightColor};
  }
`;
