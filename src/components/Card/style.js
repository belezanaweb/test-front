import styled from 'styled-components';

export const Title = styled.div`
    height: 17px;
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    padding-top: 2vh;
    padding-bottom: 2vh;
`;

export const Box = styled.div`
    width: 341px;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: ${(props) => props.padding};
    gap: 1vh;

    @media (min-width: 1024px) {
        width: 90%;
        align-self: self-start;
        display: grid;
        padding: 5vh;
    } 
`;

export const Container = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-area: ${(props) => props.gridArea || 'card'};
`;
