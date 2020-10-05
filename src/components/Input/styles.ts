import styled, { css } from 'styled-components';

interface InputProps {
  error?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-gray);
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    margin-bottom: 5px;
  }

  small {
    color: var(--color-error);
    font-size: 12px;
    line-height: 12px;
    margin-top: 3px;
  }
`;

export const InputElement = styled.input<InputProps>`
  border-radius: 3px;
  height: 45px;
  padding: 14px 88px 12px 13px;

  ${(props) => props.error ?
    css`
      box-shadow: none;
      border: 1px solid var(--color-error);
    ` :
    css`
      box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
      border: 1px solid #E7E7E7;

      &:focus {
        border: 1px solid #A43287;
        box-shadow: none;
      }
    `
  };

  &::placeholder {
    color: var(--color-gray);
  }
`;
