import styled from 'styled-components';

import Tooltip from '../Tooltip';
import { INPUT_ERROR, INPUT_FOCUSED } from '../../constants/validation';

interface ContainerProps {
  inputHeight?: string;
  validationType: string;
}

const returnColorPerType = (props: any) => {
  const { validationType } = props;

  switch (validationType) {
    case INPUT_ERROR:
      return props.theme.error;
    case INPUT_FOCUSED:
      return props.theme.focus;
    default:
      return props.theme.grey;
  }
};

export const Container = styled.div<ContainerProps>`
  height: 4.5rem;
  position: relative;

  display: flex;
  align-items: center;

  border: 1px solid;
  border-color: ${(props) => returnColorPerType(props)};

  background: ${(props) => props.theme.white};
  border-radius: 0.3rem;
  padding: 1rem 0.5rem 1rem 2rem;
  width: 100%;

  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.error};
  }

  svg {
    margin-right: 1rem;
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    font-size: 1.8rem;
    color: ${(props) => props.theme.text};
    letter-spacing: 1.2px;

    &::placeholder {
      color: ${(props) => props.theme.placeholder};
      font-size: 1.6rem;
      letter-spacing: 1.2px;
    }
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 1.5rem;
  right: 1rem;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    text-align: center;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
