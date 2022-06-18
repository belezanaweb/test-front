import styled from "styled-components";

export const StyledPriceListText = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${({ total }) => total ? '700' : '400'};
  color: ${({ discount }) => discount ? '#FF7800' : '#212122'};
`

export const StyledPriceListItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 6px;
  }
`

export const StyledPriceListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`