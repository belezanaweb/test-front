import * as React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin: 10px auto;
`

const Card = styled.div`
  background-color: #FFF;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

const Title = styled.h2`
  padding: 0 10px;
  margin-bottom: 5px;

  color: #999;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
`

const Section: React.FC<{
  title: string,
}> = ({ title = '', children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <Card>
      {children}
    </Card>
  </SectionWrapper>
)

export default Section;
