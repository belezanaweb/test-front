import styled from 'styled-components'

export const Title = styled.p`
  color: #999;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: NaNpx;
  margin: 0;
  padding: 0.6em;
  padding-left: 1em;
`

export const Button = styled.button`
  height: 60px;
  width: 320px;
  background-color: #ff6c00;
  color: white;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  border-bottom: 4px solid rgba(0, 0, 0, 0.25);
  box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.25);
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.2em;
`

export const FormContainer = styled.form`
  height: 50vh;
  width: 90vw;
  background-color: white;
  box-shadow: 0px 2px 11px 1px rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  padding: 1em;
  border-radius: 4px;
`
export const Input = styled.input`
  height: 50px;
  width: 320px;
  border-radius: 4px;
  border: 1px #ccc solid;
  color: #e0e7ee;
  font-size: 16px;
  letter-spacing: 1.37px;
  line-height: 19px;
  padding-left: 0.5em;
`
export const InputLabel = styled.p`
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  display: flex;
  align-self: start;
  padding-left: 1em;
  margin: 0.2em;
`

export const InvisibleButton = styled.button`
  display: none;
`
