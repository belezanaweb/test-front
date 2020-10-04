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