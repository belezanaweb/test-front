import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription?: number;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
};

export const Container = styled(animated.div)<ContainerProps>`
  min-width: 40rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 30px 16px 16px;

  position: fixed;
  left: calc(50% - 20rem);
  top: 1rem;

  transition: all 200ms;
  z-index: 99999;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  strong {
    font-size: 1.6rem;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 1.6rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
