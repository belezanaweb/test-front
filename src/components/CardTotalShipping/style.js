import styled from 'styled-components';

export const Card = styled.div`
    height: 129px;
    width: 341px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #CCC;
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-pack: justify;
    padding: 1vh;

    @media (min-width: 1024px) {
        grid-area: card-shipping;
    } 
`;

export const Type = styled.div`
    grid-area: "type";
    height: 17px;
    width: 124px;
    font-family: "Helvetica Neue";
    font-size: 14px;
    line-height: 17px;
`;

export const Price = styled(Type)`
    grid-area: "price";
    text-align: right;
`;

export const Line = styled.div`
    height: 17px;
    display: flex;
    justify-content: space-between;
    padding: 1vh;
    color: ${(props) => (props.isDiscount ? '#FF7800' : '#212122')};
    font-weight: ${(props) => (props.isTotal ? 'bold' : null)};
`;
