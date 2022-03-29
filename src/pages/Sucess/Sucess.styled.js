import styled from 'styled-components'
import image from '../../assets/images/success.png'

export const SucessImg = styled.img.attrs({
  src: `${image}`
})`
  height: 65.57px;
  width: 250.27px
  text-align: center;
  `

export const SucessBackgroud = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
`

export const UserWrapper = styled.div`
  overflow-y: hidden;
  height: 70px;
  width: 340px;
  display: flex;
  font-family: 'Helvetica Neue';
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  ul {
    margin-top: 10px;
  }
`

export const ItemCard = styled.div`
  display: flex;
  margin: 10px;
  box-sizing: border-box;
  height: 64px;
  width: 316px;
  border-radius: 3px;
  border: 1px solid #eee;
  overflow-y: hidden;
`
export const ItemImage = styled.div`
  height: 65px;
  width: 55px;
`

export const ItemSpecs = styled.div`
  width: 251px;
  color: #212122;
  overflow-y: hidden;
`

export const StyledUl = styled.ul`
  height: 68px;
  width: 310px;
  overflow-y: hidden;
  margin-left: -30px;
`

export const SucessWrapper = styled.div`
  height: 255px;
  width: 341px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  img {
    margin-left: 11px;
    height: 42px;
    width: 42px;
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
//x-------------------------------------------x-------------------------------------------x

// Values display

export const SucessValuesWrapper = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 15px 0px;

  p {
    margin: 0px;
    width: 80px;
    text-align: end;
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
