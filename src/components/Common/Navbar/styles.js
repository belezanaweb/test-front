import styled from 'styled-components'

export const Container = styled.div`
  height: 40px;
  width: auto;
  min-width: 316px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 10px;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .title {
    color: #ccc;
    /* color: ${(props) => (props.select ? '#FF7800' : '#CCC')}; */
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;

    &.selected {
      transition: border-bottom 0.5s ease-in-out;
      color: #ff7800;
    }
  }

  .title:hover {
    transform: translateY(-2px);
    color: #ff7800;
  }
`
