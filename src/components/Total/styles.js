import styled from 'styled-components'

export const Container = styled.div`
    height: fit-content;
    width: 100%;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid #CCC;
    gap: 3vw;
    @media only screen and (min-width: 1024px) {
        padding-top: 2vw;
        padding-bottom: 2vw;
        gap:1vw;
    }
`

export const LineContainer = styled.div`
    display:flex;
    justify-content: space-between;
    p{  
        text-transform: uppercase;
        color: ${props => props.inputColor || "#212122"};
        font-weight: ${props => props.inputWeight || "normal"};
    }
`