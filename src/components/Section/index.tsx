import React from 'react';
import { Wrapper, WrapperProps } from './Section.styled';

interface Props extends React.PropsWithChildren, WrapperProps {};

const Section: React.FC<Props> = ({ align, children }): React.ReactElement => (
  <Wrapper data-testid='section' align={align}>
    {children}
  </Wrapper>
);

export default Section;
