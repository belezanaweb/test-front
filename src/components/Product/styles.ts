import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Image = styled.img`
  border-radius: 6px;
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.font.size.xsmall};
  font-weight: normal;
`

export const PriceContainer = styled.div`
  display: flex;
  flex: 1 0 74px;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`

export const Price = styled.strong`
  font-size: ${(props) => props.theme.font.size.small};
  text-align: right;
`

export const Discount = styled(Price)`
  color: ${(props) => props.theme.colors.gray};
  text-decoration: line-through;
  font-weight: normal;
`
