import styled from 'styled-components'

//NavBar

export const Navbar = styled.ul`
  list-style-type: none;
  background-color: #ffffff;
  display: flex;
  text-transform: uppercase;
  font-size: 0.8em;
  margin: 0;
  padding: 0;

  li {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: inline-block;
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    margin: 0px;
  }
`

//Product Card

export const Title = styled.h4`
  color: #9e9e9e;
  margin: 1rem;
  margin-left: 1.5rem;
  margin-bottom: 0px;
  text-transform: uppercase;
`

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin: 1rem;
  margin-top: 0.5rem;
`

//Resume Card

export const Resume = styled.ul`
  list-style-type: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;

  li {
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  li:last-of-type {
    padding-bottom: 0px;
  }

  .discount {
    color: orange;
  }

  .total {
    font-weight: 800 !important;
  }

  h5 {
    flex-grow: 1;
    margin: 0px;
    text-align: start;
  }

  h5:last-of-type {
    text-align: end;
  }
`
