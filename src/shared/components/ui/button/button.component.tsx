import * as React from 'react';

import { IButtonProps } from './button.interface';
import * as Styled from './button.styled';

export const Button: React.FC<IButtonProps> = ({
  children,
  size = 'medium',
  styleType = 'primary',
  onClick,
  type = 'button',
  block = false,
}) => (
  <Styled.Button styleType={styleType} block={block} type={type} size={size} onClick={onClick}>
    {children}
  </Styled.Button>
);
