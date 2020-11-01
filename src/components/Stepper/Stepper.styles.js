import styled from 'styled-components'

export const StepperWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 0;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const StepperList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  list-style: none;
`

export const StepperItem = styled.li`
  display: block;
  color: #ccc;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.23076923076923;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    `
    color: #ff7800;
  `}
`
