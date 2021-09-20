import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainSubContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`

export const TitleCartStyled = styled.h4`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
`

export const Box = styled.div`
  background-color: white;
  margin: 5px 10px;
  padding: 5px 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
  border-radius: 3px;
`
export const InsideBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const ContainerBox = styled.div`
  width: 100%;
  margin-left: 10px;
  color: #212122;
`

export const DivDescription = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`

export const DivPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: bold;
`

export const DivTotal = styled.div`
  background-color: #eeeeee;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`

export const TotalInfos = styled.div`
  background-color: #eeeeee;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  font-size: 14px;
`
export const ContainerTotalInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ToTalValue = styled(ContainerTotalInfos)`
  font-weight: bold;
`

export const ButtonStyled = styled.button`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 15px 10px;
  padding: 15px;
  border-top: medium none;
  border-right: medium none;
  border-left: medium none;
  border-bottom: 4px solid #d45a00;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
