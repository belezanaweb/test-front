import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.darkGrey};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.lightGrey};

  main {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 1920px) {
      & {
        width: 60%;
      }
    }

    svg {
      width: 80%;
    }
  }
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    gap: 1rem;
    cursor: pointer;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;

  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.4s ease;

      &:hover {
        background-color: ${(props) => darken(0.2, props.theme.title)};
      }

      & + li {
        margin-left: 10px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;

    p {
      margin-left: 20px;
    }
  }
`;
