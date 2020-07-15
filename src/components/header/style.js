import styled from "styled-components";
 

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #CCC;
    font-size: 14px;
    font-weight: 700;
    padding: 12px;

    p {
        margin: 0;
    }

    p:nth-of-type(${props => props.page}){
        color: #FF7800;
    }

`