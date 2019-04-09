/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const MenuBody = styled('nav')`
  height: 40px;
  width: 360px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);


  ul {
    display: flex;
    justify-content: space-around;

    li {
      margin: 13px 29px 12px 0;
      list-style: none;

      .sacola {
        text-transform: uppercase;
        text-decoration: none;
        height: 16px;
        width: 61px;
        color: #FF7800;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        text-align: center;
      }

      .pagamento, .confirmacao {
        text-transform: uppercase;
        text-decoration: none;
        height: 16px;
        width: 89px;
        color: #CCC;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        text-align: center;
      }
    }
  }

`
const Menu = () => {
  return (
    <MenuBody>
      <ul>
        <li>
          <a href='/' className='sacola'>Sacola</a>
        </li>
        <li>
          <a href='/' className='pagamento'>Pagamento</a>
        </li>
        <li>
          <a href='/' className='confirmacao'>Confirmação</a>
        </li>
      </ul>
    </MenuBody>
  )
}

export default Menu