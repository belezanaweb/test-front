import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  padding: 12px 14px;

  border: 1px solid #eee;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export const Image = styled.div`
  height: 64px;
  min-width: 64px;
  margin-right: 12px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const Description = styled.span`
  font-size: 0.8125rem;
`

export const Price = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
`
