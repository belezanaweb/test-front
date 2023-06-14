import styled from 'styled-components'

export const Navigation = styled.nav`
  background-color: #ffffff;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      border-bottom: 1px solid #878787;

      a {
        font-size: 0.875rem;
        line-height: 1.5rem;
        padding: 0.5rem 0.75rem;
        display: inline-flex;
        text-decoration: none;
        color: #878787;
        cursor: default;
        pointer-events: none;

        &.active {
          border-bottom: 4px solid #000000;
          color: #000000;
        }
      }
    }
  }
`
