import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Wrapper = styled.div``;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  line-height: 1.4rem;
`;

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  height: 4.5rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 1.4rem 1.3rem 1.2rem 1.3rem;
  width: 100%;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};

  & + div {
    margin-top: 0.8rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.error.main};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.secundary.main}; ;
    `}

  input {
    color: ${({ theme }) => theme.colors.light};
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

export const Error = styled.div`
  height: 2rem;
  margin-left: 1.6rem;
  svg {
    margin-right: 0;
  }
  span {
    background: ${({ theme }) => theme.colors.error.main};
    color: ${({ theme }) => theme.colors.white};
    &::before {
      border-color: ${({ theme }) => theme.colors.error.main} transparent;
    }
  }
`;
