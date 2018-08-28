import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  color: var(--color-dark-gray-3);
  text-transform: uppercase;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
`

const BoxContent = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow-1)
`

const Box = ({
  title,
  children
}) => (
  <Fragment>
    <Title>{title}</Title>
    <BoxContent>{children}</BoxContent>
  </Fragment>
)

export default Box;
