/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types';

const Button = styled.button`
  background-color: #FF6C00;
  height: 60px;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #FFFFFF;
  width: 100%;
  border: 0;
  border-bottom: solid 3px #D45A00;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 700;
  min-width: 285px;

  ${this}: hover{
    background-color: #D45A00;
  }
`

const ForwardButton = ({text, onClick, disabled = false}) => {
  return(
      <Button type="button" onClick={onClick} disabled={disabled} >
        {text}
      </Button>
  )
}

ForwardButton.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

export default ForwardButton