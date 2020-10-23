import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #CCC;
  padding: 10px;
  margin: 20px 0;

  p {
    display: flex;
    justify-content: space-between;
    color: #212122;
    font-size: 14px;
    line-height: 17px;

    &.discount {
      color: #FF7800;
    }

    &.total {
      margin-bottom: 0;
      margin-top: 20px;
    }
  }

  .description {
    text-transform: uppercase;
  }
`;
