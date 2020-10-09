import styled from 'styled-components';

export const ButtonCustom = styled.button`
    height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    margin-top: 3.5vh;
    :hover {
        background-color: #D45A00
    }

    @media (min-width: 1024px) {
        grid-area: "button"
    } 
`;
export const NameButton = styled.div`
    height: 24px;
    color: #FFF;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
`;
