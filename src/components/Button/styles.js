import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  background-color: ${theme.btnBackgroundColor};
  border-color: ${theme.btnBackgroundColor};
  color: ${theme.btnTextColor};
  border-radius: 4px;
  height: 3em;
  width: calc(100% - 4%);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0 2%;
  font-size: 1.5rem;

  &:hover {
    background: ${theme.btnShadowColor};
    border-color: ${theme.btnShadowColor};
  }
`;
