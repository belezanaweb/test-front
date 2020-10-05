import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: rgb(237, 237, 237);
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    width: 100%;
    height: 48px;
`

export const HeaderText = styled.h1`
    color: #CCC;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
`

export const SelectedHeaderText = styled.h1`
    color: #FF7800;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
`

export const Heading = styled.h1`
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    color: #999;
    width: 94.72%; /* 341px */
    margin-left: 20px;

    @media (min-width: 720px) {
        width: 681.98px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    align-items: center;
    width: 94.72%; /* 341px */
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding-top: 12px;

    @media (min-width: 720px) {
        width: 681.98px;
    }
`

export const Button = styled.button`
    border: none;
    height: 60px;
    width: 94.72%; /* 341px */
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    margin-bottom: 12px;
    outline: none;

    &:hover {
        background-color: #D45A00;
    }

    @media (min-width: 720px) {
        width: 681.98px;
    }
`