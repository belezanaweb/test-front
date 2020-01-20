import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const HeaderStyled = styled.header`
  background: white;
  padding: 12px 0;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 15px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    li {
      text-transform: uppercase;
      text-align: center;
      line-height: 1;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export default HeaderStyled;
