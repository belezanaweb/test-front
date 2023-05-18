import styled, { css, DefaultTheme } from 'styled-components';

const variantStyles = (theme: DefaultTheme, variant = 'primary') => ({
  primary: css`
    background: ${theme.colors.primary};
    color: #fff;
  `,
  secondary: css`
    background: ${theme.colors.secondary};
    color: #fff;
  `,
}[variant]);

export const ButtonStyled = styled.button<{ variant: string }>`
  font-family: 'Arial', sans-serif;
  border-radius: 4px;
  padding: 16px 8px;
  border: 0;
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  ${({ theme, variant }) => variantStyles(theme, variant)}
`;