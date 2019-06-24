import styled from '@emotion/styled/macro'

const themePrimaryColor = ({
  theme: {
    colors: { primary }
  }
}) => primary

const Check = styled.i`
  border: 1px solid ${themePrimaryColor};
  border-radius: 50%;
  display: inline-block;
  height: 37px;
  margin: 0 auto;
  position: relative;
  width: 37px;

  ::after {
    border-bottom: 1px solid ${themePrimaryColor};
    border-left: 1px solid ${themePrimaryColor};
    content: '';
    height: 10px;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(-50deg) translate(-1px, 15px);
    width: 17px;
  }
`

export default Check
