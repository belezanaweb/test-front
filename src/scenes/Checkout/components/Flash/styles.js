import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  margin-top: -40px;
  height: 40px;
  transition: all 2s;
  &.active {
    margin-top: 0;
  }
  strong {
    color: #491217;
  }
`
