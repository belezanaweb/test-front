import styled from 'styled-components'

export const Navbar = styled.header`
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  .row {
    max-width: 500px;
    margin-left: 0px !important;
    margin-right: 0px !important;
    .col-4 {
      padding: 0px !important;
    }
  }
`

export const Step = styled.h6`
  padding: 0;
  margin: 0;
  text-align: center;
  color: ${(props) => (props.current ? '#FF7800' : '#CCC')};
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  display: block !important;
`
