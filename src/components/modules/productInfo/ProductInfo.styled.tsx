import styled from 'styled-components'

export const StyledProductInfo = styled.article`
  padding: 0.875rem;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.color.border.productInfo};

  display: flex;
  flex-direction: row;
  gap: 0.625rem;

  color: ${({ theme }) => theme.color.text.productInfo.primary};
`

export const StyledProductInfoImage = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
`

export const StyledProductInfoDescriptionDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledProductInfoDescription = styled.p`
  font-size: 0.8125rem;
  line-height: 1rem;
`

export const StyledProductInfoPrice = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;
  text-align: right;
`
