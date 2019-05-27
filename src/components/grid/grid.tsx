import * as React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GridContainer>
    {children}
  </GridContainer>
)

export default Grid;
