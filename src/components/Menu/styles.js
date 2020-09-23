import styled from 'styled-components';

import Logo from '~/logo.svg';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  width: 100%;

  display: flex;

  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 998px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0;

  display: flex;
  justify-content: space-between;
  list-style: none;

  max-width: 375px;

  @media (min-width: 768px) {
    margin: 0 -1.2rem 0 0;
  }

  a,
  span {
    display: block;
    padding: 0.8rem 0.7rem;

    text-decoration: none;
    text-transform: uppercase;

    font-weight: ${(props) => props.theme.fonts.weights.bold};
    font-size: 0.844rem;

    color: #ccc;

    transition: color 0.2s ease;

    @media (min-width: 375px) {
      padding: 0.8rem 1.2rem;
    }

    &.active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const StyledLogo = styled.h1`
  display: none;

  @media (min-width: 768px) {
    width: 80px;
    height: 40px;
    margin: 0;
    display: block;

    background: url(${Logo}) no-repeat 0px -20px;
    background-size: cover;

    text-indent: -9999px;
    font-size: 0;
  }
`;
