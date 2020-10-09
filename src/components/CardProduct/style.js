import styled from 'styled-components';

export const ProductCard = styled.div`
    height: ${(props) => (props.isRenderPrice ? '90px' : 'none')};
    width: 316px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: grid;
    grid-template-columns: 30% 70%;

    @media (min-width: 1024px) {
        width: 100%;
    } 
`;

export const Image = styled.img.attrs((props) => ({
  src: props.teste.medium,
}))`
    height: 65px;
    width: 65px;
`;

export const Name = styled.div`
    height: 58px;
    color: #212122;
    font-size: 13px;
    font-family: "Helvetica Neue";
    line-height: 16px;
    padding-top: 1vh;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
    } 

`;

export const Price = styled.div`
    height: 17px;
    color: #212122;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;

    @media (min-width: 1024px) {
        padding-right: 2vh;
    } 
`;

export const Infos = styled.div`
`;
