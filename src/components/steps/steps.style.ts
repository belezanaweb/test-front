import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StepsStyled = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  position: fixed; 
  background: #fff;
  
  nav {
    display: flex;
    align-items: stretch;
    justify-content: center;

    max-width: 768px;
    margin: 0 auto;
  }
`

export const StepStyled = styled(Link) <{ active: boolean } >`
  flex: 1 0 auto;
  padding: 1.083em 1.3em;
  color: ${({ active }) => (active ? '#FF7800' : '#CCC')};
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0;
  display: block;
  background: #fff;
  transition: color .3s ease-in-out;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 3px;
    background: transparent;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: background .3s ease-in-out;
  }

  &:hover::before {
    background: #FF7800;
  }
`
