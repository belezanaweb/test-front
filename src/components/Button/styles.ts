import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    cursor: pointer;
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: 1px dashed;
    }

    &:hover {
      background: 'none';
    }
  `}
`
