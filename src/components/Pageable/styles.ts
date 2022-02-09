import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
`;

interface ButtonPageProps {
  selected?: boolean;
}

export const ButtonPage = styled.button<ButtonPageProps>`
  height: 25px;
  width: 25px;
  margin-right: 0.5rem;
  background-color: ${(props) => (props.selected ? '#F25D27' : '#f5f5f5')};
  color: ${(props) => (props.selected ? '#FFF' : '#666')};
  border: none;

  :disabled {
    ${(props) =>
      !props.selected &&
      css`
        border: none;
        background: none;
        cursor: unset;
        width: 10px;
      `}
  }
`;

export const ButtonArrow = styled.button`
  height: 25px;
  width: 25px;
  margin-right: 0.5rem;
  background-color: #f5f5f5;
  color: #666;
  border: none;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
