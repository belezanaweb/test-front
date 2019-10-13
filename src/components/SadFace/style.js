import styled from "styled-components";
import theme from "theme";

export const StyledSadFace = styled.div`
  display: flex;
  justify-content: center;

  .sad-face {
    position: relative;
    height: 6.25rem;
    width: 100px;

    .mouth {
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: -15px;
      width: 100px;
      height: 110px;
      border-radius: 50%/90px 90px 0 0;
      border: solid 8px ${theme.primary};
      border-color: ${theme.primary} transparent transparent transparent
    }

    .eye {
      background-color: ${theme.primary};
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      top: 25%;
      left: 15%;

      &.right {
        left: 52%;
      }
    }
  }
`
