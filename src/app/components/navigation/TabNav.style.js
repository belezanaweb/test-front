import styled from 'styled-components'

export const ContainerTabNav = styled.section`
  padding: 15px;
  background-color: #fff;
  box-shadow: 1px -5px 10px 1px rgb(0 0 0 / 50%);
  nav {
    margin: 0;
    padding: 0;
    ul {
      display: flex;
      justify-content: center;
      li {
        list-style: none;
        margin: 0 16px 0 16px;
        font-size: 0.9rem;
        font-weight: bold;
        a {
          color: #ff7800;
          text-decoration: none;
        }
      }
    }
  }
`
