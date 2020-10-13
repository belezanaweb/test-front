import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  > label {
    color: #ccc;
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  > input {
    display: block;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    color: #ccc;
    height: 45px;
    padding: 12px;
    width: 100%;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: #999;
        color: #999;
      `}

    ${props =>
      props.isFilled &&
      css`
        color: #111;
      `}

    &::placeholder {
      color: #e7e7e7;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e7e7e7;
    }
  }

  > span {
    color: #c53030;
    font-size: 10px;
    margin: 8px 0;
  }
`;
