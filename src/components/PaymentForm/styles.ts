import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: var(--color-gray-dark);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 21px 5px 11px;
  }
`;

export const Form = styled.form`
  background: var(--color-white);
  padding: 12px 10px 25px 10px;

  & > div {
    &:nth-child(2) {
      margin: 25px 0;
    }

    &:nth-child(3) {
      display: flex;
    }
  }
`;

export const DoubleInputs = styled.div`
  display: flex;

  & > div {
    &:first-child {
      margin-right: 20px;
      max-width: 160px;
    }

    &:last-child {
      max-width: 140px;
    }
  }
`;

