import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const AlertaStyled = styled.div`
  > div {
    background: rgba(255, 255, 255, 0.7);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;

    > div {
      width: 100%;
    }
    div {
      margin: 20px 0;
    }
  }
`;

export default AlertaStyled;
