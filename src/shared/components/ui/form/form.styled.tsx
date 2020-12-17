import styled from 'styled-components/macro';

export const Group = styled.p`
  margin-bottom: 2.5rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  color: ${(props) => props.theme.form.label.color};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Field = styled.input`
  border-radius: 3px;
  background-color: ${(props) => props.theme.form.field.backgroundColor};
  border: 1px solid ${(props) => props.theme.form.field.borderColor};
  box-shadow: inset 0 1px 2px 0 ${(props) => props.theme.form.field.shadowColor};
  color: ${(props) => props.theme.form.field.color};
  font-size: 1.6rem;
  padding: 1.2rem;
  width: 100%;
`;
