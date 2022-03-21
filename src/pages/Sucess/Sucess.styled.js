import styled from 'styled-components'
import image from '../../assets/images/success.png'

export const SucessImg = styled.img.attrs({
  src: `${image}`
})`
  height: 65.57px;
  width: 250.27px
  text-align: center;
  margin-left: 55px;
  `

export const SucessBackgroud = styled.div`
  overflow-y: hidden;

  @media only screen and (max-width: 412px) {
    max-width: 412px;
  }

  @media only screen and (min-width: 412px) and (max-width: 736px) {
    max-width: 736px;
    margin-left: 30px;
  }
`

export const SucessDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  justify-content: center;

  .payment {
    width: 20px;
  }
`

export const userWrapper = styled.div`
overflow-y: hidden;
height: 90px;
width: 340px;
display: flex;
font-family: "Helvetica Neue";
flex-direction: flex-start;
border-radius: 3px;
background-color: #fff;
box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
margin-left: 17px;

.item-change {
  display: flex;
  flex-direction: column;
  width: 20px;
}

  .user-wrapper {
    width: 200px
    height: 200px
    overflow-y: hidden;
  }

  list-item {
    with: 50px;
  }

`

export const SucessWrapper = styled.div`
  height: 325px;
  width: 341px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  .items-card {
    display: flex;
    margin: 10px;
    box-sizing: border-box;
    height: 90px;
    width: 316px;
    border-radius: 3px;
    border: 1px solid #eee;
    overflow-y: hidden;
  }

  .items-specs {
    width: 251px;
    color: #212122;
    overflow-y: hidden;
  }

  img {
    height: 65px;
    width: 65px;
  }

  p {
    font-family: 'Helvetica Neue';
    font-size: 14px;
    letter-spacing: NaNpx;
    line-height: 12px;
    overflow-y: hidden;
    margin: 10px;
    margin-right: 10px;
  }

  h1 {
    height: 17px;
    width: 230px;
    font-size: 14px;
    text-align: right;
    margin: 0px;
    marginn-left: 20px;
  }
`

// Values display
export const SucessValueSeparator = styled.div(
  ({ color, margin }) => `
  display: flex;
  flex-direction: flex-start;
  padding-top: 10px;
  color: ${color};
  margin-right: ${margin}px;
  
`
)

export const SucessValueMover = styled.div``

export const SucessValuesWrapper = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 15px 0px;

  .products-display {
    display: flex;
    width: 320px;
    margin: 5px;
    margin-top: 10px;
    justify-content: space-between;
  }

  p {
    margin: 0px;
    width: 80px;
    text-align: end;
  }

  .change-color {
    color: #ff7800;
  }
`

export const SucessValuesP = styled.div(
  ({ color }) => `
  height: 17px; 
  width: 220px;
  margin-left: 15px;
  color: ${color};
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
`
)
