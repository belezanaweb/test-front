import styled from "styled-components";

export const InputCardContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const InputLabel = styled.label`
    height: 14px;
    width: 36.11%; /* 130px */
    color: #CCC;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-align: left;
    padding-bottom: 2px;
`

export const InputLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
`

export const Input = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 99%; /* 320px */
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);

    &:focus {
        outline-color: #A43287;
    }

    &:invalid {
        outline-color: #F30;
    }
`

export const InputExpirationDate = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 56%; /* 180px */
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);

    &:focus {
        outline-color: #A43287;
    }
`

export const InputCode = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 39.5%; /* 125px */
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);

    &:focus {
        outline-color: #A43287;
    }
`

export const ExpirationAndCodeWrapper = styled.div`
    display: flex;
    width: 99%; 
    justify-content: space-between;
`

export const ErrorMessage = styled.p`
    color: #F30;
    font-size: 12px;
    line-height: 14px;
    margin: 0;

`

export const ErrorContainer = styled.div`
    display: flex;
    width: 99%; 
    justify-content: space-between;
    margin: 3px 0 23px 0;


`