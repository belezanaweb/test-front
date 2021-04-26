import styled from 'styled-components'

// fa6715

//Header
export const Header = styled.header`
  height: 5vh;
  padding: 1rem;
  background-color: #31ad83;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  img {
    height: 2rem;
    width: auto;
    margin-left: 0.5rem;
  }
`

//NavBar

export const Navbar = styled.ul`
  list-style-type: none;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  text-transform: uppercase;
  font-size: 0.8em;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    color: #cecece;
    font-weight: 700;
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    margin: 0px;

    &.active {
      color: #ff890a;
    }
  }
`

//Product Card

export const Title = styled.h4`
  color: #9e9e9e;
  margin: 1rem;
  margin-left: 1.5rem;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-size: 0.95rem;
`

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.8rem;
  text-align: center;
  background-color: #fff;
  margin: 1rem;
  margin-top: 0.5rem;

  span {
    display: block;
    text-align: left;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;

    &.font-bold {
      font-weight: bold;
    }
  }
`
export const Item = styled.div`
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-evenly;

  &:last-of-type {
    margin-bottom: 0;
  }

  .photo {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .info {
    margin-left: 0.5rem;
    width: 120%;

    &.simple {
      width: 180%;

      h5 {
        display: none;
      }
    }

    span {
      display: block;
      font-size: 0.8rem;
      padding-bottom: 1rem;
      text-align: left;
    }

    h5 {
      margin: 0px;
      text-align: right;
      font-weight: 800;
    }
  }
`

export const Margin = styled.div`
  margin: 1rem;
`

//Form
export const Form = styled.form`
  padding: 0.1rem;

  .col {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    label {
      width: 55%;

      &:last-of-type {
        width: 40%;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    span {
      font-size: 0.7rem;
      font-weight: bold;
      color: #cfcfcf;

      &.feedback {
        color: red;
        font-weight: 200;
        display: none;
      }
    }

    input {
      margin: 0.3rem 0;
      padding: 0.8em;
      font-size: 0.85rem;
      border: 1px solid #cfcfcf;
      border-radius: 3px;
      box-shadow: inset -5px 1x 10px rgba(0, 0, 0, 0.5);

      &:focus {
        border-color: purple !important;
        outline: none;
      }
    }

    &.error {
      input {
        border-color: red;
      }

      span.feedback {
        display: block;
      }
    }
  }

  button {
    display: none;
  }
`

export const Button = styled.button`
  display: block;
  width: 100%;
  background-color: #ff890a;
  color: white;
  text-transform: uppercase;
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover {
    box-shadow: none;
    background-color: #d05610;
  }

  &:disabled {
    box-shadow: none;
    background-color: #d05610;
  }
`

//Resume Card

export const Resume = styled.ul`
  list-style-type: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  padding: 0.8rem;
  margin: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.7rem;

    &:last-of-type {
      padding-bottom: 0px;
    }

    &.discount {
      color: #ff890a;
    }

    &.total {
      padding-top: 0.3rem;

      & > h5 {
        font-weight: 800 !important;
      }
    }

    h5 {
      flex-grow: 1;
      margin: 0px;
      text-align: start;
      font-weight: 500 !important;
      text-transform: uppercase;

      &:last-of-type {
        text-align: end;
      }
    }
  }
`
export const Message = styled.div`
  margin: 1rem;
  margin-bottom: 1.5rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.9rem;
  }

  span {
    display: block;
    color: #ff890a;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
  }
`

//Footer

export const Footer = styled.footer`
  height: 5vh;
  padding: 1rem;
  background-color: #6d6d6d;
  color: white;
  text-align: center;

  h3 {
    font-weight: 400;
  }
`
