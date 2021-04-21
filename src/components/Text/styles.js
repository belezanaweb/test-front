import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const types = (selectedType) => {
  const type = {
    headerSeleted: css`
      color: ${theme.mainColor};
      font-weight: 700;
      text-align: center;
    `,
    headerDefault: css`
      color: #ccc;
      font-weight: 700;
      text-align: center;
    `,
    inputDefaultValueColor: css`
      color: ${theme.mainColor};
    `,
    cardTextLabel: css`
      color: #999;
      font-weight: 700;
      margin-left: 1rem;
      line-height: 1.5em;
      @media (min-width: 1000px) {
        margin-left: 5rem;
      }
    `,
    cartPriceValue: css`
      color: ${theme.textTitleColor};
      line-height: 1.5em;
    `,
    cartPriceDiscount: css`
      color: ${theme.mainColor};
      line-height: 1.5em;
    `,
    cartPriceTotal: css`
      color: ${theme.textTitleColor};
      line-height: 2.5em;
      font-weight: 700;
    `,
  };

  return type[selectedType];
};

export const Container = styled.p`
  ${(props) => props.type && types(props.type)}
`;
