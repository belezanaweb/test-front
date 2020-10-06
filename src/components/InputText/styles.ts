import styled, { css } from 'styled-components'

export const InputStyled = styled.div<{ error: boolean }>`
  margin-bottom: ${(props) => props.theme.spacing};

  label {
    display: block;
    color: ${(props) => props.theme.colors.textDisabled};
    font-size: 0.93rem;
    font-weight: 700;
    margin-bottom: ${(props) => props.theme.spacing};
  }
  input {
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: ${(props) => props.theme.spacing};
    display: block;
    width: 100%;
    &:focus {
      border: 1px solid #a43287;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }
    &::placeholder {
      color: #e0e7ee;
    }
    ${(props) =>
      props.error &&
      css`
        border: 1px solid #f30;
        box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      `};
  }
  .error {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`
