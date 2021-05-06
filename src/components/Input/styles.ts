import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Wrapper = styled.div``;

export const Title = styled.div`
  color: #ccc;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  line-height: 14px;
`;

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  height: 45px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 14px 13px 12px 13px;
  width: 100%;

  display: flex;
  align-items: center;
  color: #212121;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.secundary.main}; ;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #3fb8fe;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #e0e7ee;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
