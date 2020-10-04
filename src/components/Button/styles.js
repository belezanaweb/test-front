import styled from 'styled-components'

export const Container = styled.div`
    min-height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #FFF;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
    }

    :hover{
        background-color: #D45A00;
        h1{
            width: 320px;
        }
    }

    @media only screen and (max-width: 360px) {
        h1{font-size: 18px;}
    }
`