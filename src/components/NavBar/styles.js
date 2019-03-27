import styled from 'styled-components';

export const Container = styled.div`

  font-family: "Helvetica";


  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 12px 15px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);

    li{
      a{
        text-decoration: none;
        color: #ccc;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;

        &.active{
            color: #FF7800;
          }
      }
    }
  }

`
