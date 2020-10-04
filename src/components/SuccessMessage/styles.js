import styled from 'styled-components'

export const Container = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color: #FF7800;
    text-transform: uppercase;
    gap: 3vw;
    span{
        height: 40px;
        width: 40px;
        border: 2px #FF7800 solid;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h4{
        font-weight: 500;
    }
`
