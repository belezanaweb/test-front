import styled from "styled-components";


export const MainWrapper = styled.div`
    border-radius: 3px;
    border: 1px solid #CCC;
    padding: 14px;
    font-size: 14px;
    margin: 20px 0;

    div:nth-of-type(3){
        color: #FF7800;
    }

    div:nth-of-type(4){
        padding-top: 8px;
        font-weight: bold;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    p {
        margin: 8px 0;
    }
`