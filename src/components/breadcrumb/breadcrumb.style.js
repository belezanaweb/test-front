import styled from 'styled-components'

const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
  height: 40px;
`

const BreadcrumbItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 38px;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 760px;
  padding: 0px 20px;
`

const BreadcrumbItem = styled.div`
  font-size: 13px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : '700')};
  line-height: 16px;
  color: ${(props) => (props.isSelected ? '#FF7800' : '#ccc')};
  text-transform: uppercase;
  @media (min-width: 800px) {
    text-align: center;
  }
`

export { BreadcrumbContainer, BreadcrumbItemBox, BreadcrumbItem }
