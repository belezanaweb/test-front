import styled from "styled-components";
 

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #CCC;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 24px;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    background-color: #FFF;

    p {
        margin: 0;
    }

    p:nth-of-type(${props => props.page}){
        color: #FF7800;
    }

    @media (min-width: 800px) {
        padding: 15px 60px;
        margin-bottom: 5px;      
    }

`