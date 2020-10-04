import React, { useEffect, useState } from 'react';
import { Container } from './styles';

let theme = {
    small: {
        heightContainer: "10vh",
        gridColumnP: "1/3",
        displayH3: "none",
        widthImg: "85%",
        gridTemplateColumnsContainer: "2fr 10fr"
    }
}

function ProductCard(props) {
    const [heightContainer, setHeightContainer] = useState('')
    const [gridColumnP, setGridColumnP] = useState('')
    const [displayH3, setDisplayH3] = useState('')
    const [widthImg, setWidthImg] = useState('')
    const [gridTemplateColumnsContainer, setGridTemplateColumnsContainer] = useState('')

    useEffect(() => {
        switch (props.themeType) {
            case "small":
                setHeightContainer(theme.small.heightContainer)
                setGridColumnP(theme.small.gridColumnP)
                setDisplayH3(theme.small.displayH3)
                setWidthImg(theme.small.widthImg)
                setGridTemplateColumnsContainer(theme.small.gridTemplateColumnsContainer)
                break;
            default:
                break;
        }
    }, [props.themeType]);

    return (
        <Container
            heightContainer={heightContainer}
            gridColumnP={gridColumnP}
            displayH3={displayH3}
            widthImg={widthImg}
            gridTemplateColumnsContainer={gridTemplateColumnsContainer}>
            <img src={props.product.imageObjects[0].small} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <h3>R${props.product.priceSpecification.originalPrice.toFixed(2)}</h3>
        </Container>
    );
}
export default ProductCard;