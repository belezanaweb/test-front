import styled from 'styled-components'

export const StyledImg = styled.img`
  height: 65px;
  width: 65px;
`
StyledImg.defaultProps = {
  src: Image
}

export const StyledDiv = styled.div`
  height: 90px;
  width: 316px;
  padding-right: 9px;
  padding-left: 10px;
`
export const StyledH3 = styled.h3`
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  letter-spacing: NaNpx;
  line-height: 16px;
`

export const StyledParagraph = styled.p`
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`
StyledParagraph.defaultProps = {
  type: Number
}
