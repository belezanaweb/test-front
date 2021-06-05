import styled from 'styled-components'

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`

export const Item = styled.li`
  width: 100%;
  padding: 11px 10px 14px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.cartList.border};
  list-style: none;

  display: flex;
  gap: 11px;
`

export const Image = styled.img`
  width: 65px;
  height: 65px;
  background-color: lightgray;
`

export const Information = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.cartList.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 13px;
  line-height: 16px;
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.cartList.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  align-self: flex-end;
`
