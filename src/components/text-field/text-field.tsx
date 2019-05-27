import * as React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
  display: flex;

  width: 100%;
  margin: 5px 0 3px;
  padding: 12px;
  background-color: ${props => props.theme && css`
    ${props.theme.palette.common.white};
  `};
  border: 1px solid ${props => props.theme && props.theme.palette.neutral.lightest};
  border-radius: 3px;

  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme && props.theme.palette.neutral.main};

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2) inset;
  outline: none !important;

  transition:
    border-color 0.64s cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 0.32s cubic-bezier(0.075, 0.82, 0.165, 1);

  &::placeholder {
    color: ${props => props.theme && css`
      ${props.theme.palette.neutral.light};
    `};
  }

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme && css`
      ${props.theme.palette.secondary.main};
    `};
  }
`;

const FeedbackText = styled.span`
  min-height: 14px;

  color: inherit;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;

  opacity: 0;
  visibility: hidden;
`;

const Label = styled.label<any>`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 10px;

  color: ${props => props.theme && props.theme.palette.neutral.medium};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;

  ${props => props.showError && props.error && css`
    ${FeedbackText} {
      color: ${props.theme.palette.support.error};
      opacity: 1;
      visibility: visible;
    }

    ${Input} {
      box-shadow: none;
      border-color: ${props.theme.palette.support.error};
    }
  `};
`;

const TextField = ({ label, id, error, errorMessage = 'Invalid field', ...props }: any) => {

  const [isDirty, setDirty] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setDirty(true);
  }, []);

  return (
    <Label htmlFor={id} error={error} showError={isDirty && isFocused}>
      {label}
      <Input id={id} {...props} onFocus={handleFocus} onBlur={handleBlur} />
      <FeedbackText>{errorMessage}</FeedbackText>
    </Label>
  );
}

export default TextField;
