import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #d3d3d4;
    background-color: #FFF;

   @media (min-width: 1024px) {
        display: flex;
        /* justify-content: space-around; */
    } 
`;

export const Logo = styled.div`
    width: 60%;
    display: none;

    @media (min-width: 1024px) {
        display: inline-block;
    }
`;

export const Imagem = styled.img`
    width: 14%;
`;

export const Button = styled.button`
    padding: 0;
    margin: 0;
    height: 16px;
    /* width: 101px; */
    color: ${(props) => (props.isActive ? '#FF7800' : '#CCC')};
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    border: none;
    background-color: #FFF;
`;
