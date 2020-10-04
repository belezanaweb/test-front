import styled from 'styled-components'
import InputMask from 'react-input-mask';

export const CardDetailsWrapper = styled.div`
    display: grid;
    gap: 25px;
    padding-bottom: 13px;
`

export const Content = styled.div`
    display: grid;
    gap: 5px;
`

export const LastDatails = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    gap: 20px;
`

export const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    color: #CCC;
`

export const ErrorMessage = styled.label`
    font-size: 12px;
    color: #F30;
`

export const Input = styled(InputMask)`
    width: 100%;
    height: 45px;
    padding: 13px;
    border-radius: 3px;
    font-size: 16px;
    border: 1px solid #E7E7E7;
    box-shadow: 0 0.1px 2px 0 rgba(0,0,0,0.2) inset;

    ::placeholder {
        color: #E0E7EE;
    }
    :focus {
        border: 1px solid #A43287;
    }
    :invalid {
        border: 1px solid #F30;
    }
`