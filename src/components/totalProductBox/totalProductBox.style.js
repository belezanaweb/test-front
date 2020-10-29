import styled from 'styled-components'

const TotalProductContainer = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 20px 0px;
  display: grid;
  grid-gap: 8px;
  padding: 10px;
  text-transform: uppercase;
`

const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.isDiscount ? '#FF7800' : '#212122')};
  font-size: 14px;
  line-height: 17px;
  font-weight: ${(props) => (props.isTotal ? '700' : 'normal')};
  margin-top: ${(props) => (props.isTotal ? '8px' : '0px')};
`

export { TotalProductContainer, ValueItem }
