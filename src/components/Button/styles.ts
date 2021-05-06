import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  height: 6rem;
  border-radius: 3px;
  border: 0;
  width: 100%;
  padding: 1.8rem 0px;
  font-weight: 500;
  transition: background-color 0.3s;
  box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.primary.dark},
    0 2px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 2.4rem;
  text-align: center;
  display: block;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;
