import styled from "styled-components";
import { colors } from "../../utils/style-config";

export const Container = styled.div`
  p {
    display: flex;
    justify-content: space-between;
  }
  padding: 15px;
  border: 1px solid ${colors.borderColorDark};
  border-radius: 3px;

  #discount {
    color: ${colors.specialFontColor};
  }
`;
