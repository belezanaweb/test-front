import styled from 'styled-components'
import { theme } from '../../styles';

import { InputMaskProps } from './InputMask.types'

import InputMask from 'react-input-mask'

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputMasked = styled(InputMask)<InputMaskProps>`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray[100]};
  height: 44px;
  padding: 14px;
  font-size: 14px;
  border-radius: ${props => props.theme.borderRadius};

  ${({ error }) => !!error &&`
    border-color: ${theme.colors.danger};
  `}
`;

export const InputLabel = styled.label`
  margin: 5px 0;
  display: block;
  color: ${props => props.theme.colors.gray[400]};
  font-size: 14px;
`;
export const InputFeedback = styled.small`
  color: ${props => props.theme.colors.danger};
  font-size: 12px;
  line-height: 16px;
`;