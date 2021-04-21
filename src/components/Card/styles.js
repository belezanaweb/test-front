import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${theme.containerBackground};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin: 1% 2%;
  display: flex;
  /* @media (min-width: 1000px){
        min-height: 100vh;
    } */
`;
