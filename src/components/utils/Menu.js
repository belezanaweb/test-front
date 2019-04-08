/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const MenuBody = styled('nav')`
  margin: 32px 13px 0 14px;
  height: 72px;
  width: 387px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);

  ul {
    display: flex;
    justify-content: space-around;

    li {
      margin: 44px 29px 12px 0;
      list-style: none;

      .sacola {
        height: 16px;
        width: 61px;
        color: #FF7800;
        font-family: "Helvetica Neue";
        font-size: 13px;
        font-weight: 700;
        letter-spacing: NaNpx;
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
          <Link className='sacola'>Sacola</Link>
        </li>
        <li>
          <Link>Pagamento</Link>
        </li>
        <li>
          <Link>Confirmação</Link>
        </li>
      </ul>
    </MenuBody>
  )
}

export default Menu