import styled from 'styled-components'

export const StyledProductCardTextPrice = styled.h3`
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`

export const StyledProductCardTextName = styled.h3`
  font-size: 13px;
  font-weight: 400;  
  margin-bottom: 10px;
`

export const StyledProductCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  color: #212122;
`

export const StyledProductCardImage = styled.img`
  margin-right: 10px;
  width: ${({ hideDetails }) => hideDetails ? '45px' : '65px'};
  height: ${({ hideDetails }) => hideDetails ? '45px' : '65px'};
`

export const StyledProductCardWrapper = styled.div`
  display: flex;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #eee;
`