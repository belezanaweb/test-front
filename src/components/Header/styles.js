import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.containerBackground};
  padding: 2%;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  justify-content: space-around;
  height: 3.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
`
