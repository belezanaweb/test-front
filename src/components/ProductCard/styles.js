import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => props.heightContainer || "25vw"};
  width: 100%;
  border-radius: 3px;
  border: 1px solid #EEE;
  display:grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: ${props => props.gridTemplateColumnsContainer || "2fr 7fr"};
  padding: 3vw;

  img{
    width: ${props => props.widthImg || "60%"};
    grid-column:1/2;
    grid-row: 1/3;
  }

  p{
    height: 100%;
    width: 100%;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 12px;
    grid-column: 2/3;
    grid-row: ${props => props.gridColumnP || "1/3"};
  }
  h3{
    display: ${props => props.displayH3 || "flex"};
    height: 100%;
    width: 100%;
    color: #212122;
    font-size: 15px;
    font-weight: 700;
    line-height: 17px;
    justify-content: flex-end;
    align-items: flex-end;
    grid-column:2/3;
    grid-row: 2/3;
  }

  @media only screen and (max-width: 360px) {
    img {
      width: ${props => props.widthImg || "90%"};
    }
    }
  
  @media only screen and (min-width: 400px) {
    height: 20vw;
    img {
      width: ${props => props.widthImg || "75%"};
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 45vh;
    gap: 16px;
    width: 30%;
    display:flex;
    flex-direction: column;
    img{
      align-self: center;
      width: 100px;
    }
  }
`

