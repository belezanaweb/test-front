import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  width: 100%;
`

const Label = styled.label``

const TextField = ({ label, id, ...props }: any) => (
  <Label htmlFor={id}>
    {label}
    <Input id={id} {...props} />
  </Label>
)

export default TextField;
