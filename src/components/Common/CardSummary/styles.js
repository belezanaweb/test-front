import styled from 'styled-components'

export const Container = styled.div`
  max-width: 660px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 15px 13px 14px 13px;

  @media (min-width: 700px) {
    height: ${(props) => (props.screenPayment ? '303px' : '325px')};
    margin-left: 10px;
    margin-top: 28px;
  }
`
export const BoxText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 316px;

  @media (min-width: 700px) {
    min-width: 400px;
  }

  &.product {
    margin-bottom: 9px;
  }

  &.shipping {
    margin-bottom: 8px;
  }

  &.discount {
    margin-bottom: 16px;
  }
`

export const Text = styled.h2`
  font-weight: normal;
  color: #212122;
  font-size: 14px;
  line-height: 17px;
  margin: 0;

  &.discountColor {
    color: #ff7800;
  }

  &.total {
    font-weight: bold !important;
  }
`
