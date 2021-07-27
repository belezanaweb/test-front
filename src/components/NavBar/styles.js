import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  font-family: Helvetica, Arial, sans-serif;
`
export const NavSection = styled.div`
  width: 100%;
  max-height: 40px;
  background-color: #ffffff;
  top: 0;
  display: flex;
  align-items: flex-start;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => (props.active ? '#FF7800' : '#CCC')};
`
