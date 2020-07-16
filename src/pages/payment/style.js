import styled from "styled-components";


export const PaymentWrapper = styled.div`
    background-color: #EEE;
    padding: 10px;

    h2 {
        color: #999;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 5px;
    }
`

export const InputWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 12px;

    label {
        color: #CCC;
        font-size: 12px;
        font-weight: 700;
    }


    input {
        width: 100%;
        height: 45px;
        border-radius: 3px;
        border: 1px solid #E7E7E7;
        box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
        background-color: #FFF;
        padding: 12px;
        font-size: 16px;
        color: #212121;

        ::placeholder {
            color: #E0E7EE;
        }

        :focus {
            border-color: #A43287;
        }       
    }

    input:first-of-type{
        margin-bottom: 25px;
    }
`

export const InputGridWrapper = styled.div` 
    background-color: #FFF;
    padding: 12px;
    display: grid;
    grid-column: 1fr 1fr;
    grid-row: 1fr 2fr;
    grid-column-gap: 2px;

    label {
        color: #CCC;
        font-size: 12px;
        font-weight: 700;
        grid-row-start: 1;
    }


    input {
        width: 95%;
        height: 45px;
        border-radius: 3px;
        border: 1px solid #E7E7E7;
        box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
        background-color: #FFF;
        padding: 12px;
        font-size: 16px;
        color: #212121;
        margin-bottom: 25px;

        ::placeholder {
            color: #E0E7EE;
        }

        :focus {
            border-color: #A43287;
        }
    }
`