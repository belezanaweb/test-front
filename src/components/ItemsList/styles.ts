import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

  @media (min-width: 48rem) {
    grid-area: list;
  }

  li {
    display: flex;
    gap: 1rem;
    padding: 1rem 1.2rem;
    gap: 2rem;

    font-size: 1.3rem;
    line-height: 1.6rem;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.3rem;

    img {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  span {
    align-self: flex-end;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7rem;
  }
`;

export const CartSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;

  border: 1px solid #ccc;
  border-radius: 0.3rem;

  li {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
  }
`;

export const UpdateItemControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${(props) => props.theme.border};
  padding-left: 1rem;

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: ${(props) => props.theme.primaryDark};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme.primaryDark};
      }
    }

    &:disabled {
      svg {
        color: ${(props) => props.theme.disabled};
        cursor: not-allowed;
      }
    }
  }
`;

export const DeleteItemControl = styled(UpdateItemControl)``;
