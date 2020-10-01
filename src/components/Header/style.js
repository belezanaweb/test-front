import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  display: flex;
  justify-content: center;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`

export const Text = styled.label`
  cursor: pointer;
  color: ${props => {
    if (props.isOrange) {
      return "#FF7800"
    } else {
      return "#CCC"
    }
  }};
`