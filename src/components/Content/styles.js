import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  margin-bottom: 20px;

  @media (min-width: 960px) {
    width: 62%;
  }
`

export const Title = styled.h2`
  margin-bottom: 6px;
  margin-left: 12px;

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #999;
`

export const Wrapper = styled.div`
  padding: 12px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`
