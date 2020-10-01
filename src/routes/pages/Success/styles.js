import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2vw;
  text-align: center;

  svg {
    font-size: 39.51px;
    color: #FF7800;
    margin: 11px 0;
  }

  h1 {
    text-transform: uppercase;
    font-size: 14px;
    color: #FF7800;
  }

  section {
    text-align: left;

    h1 {
      margin: 21px 0 4px 10px;
    }

    div {
      border-radius: 3px;
      background-color: #FFF;
      box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
      line-height: 17px;
      padding: 15px;
    }

    div.payment {
      text-transform: uppercase;
    }
  }
`;
